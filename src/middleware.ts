import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Rate limiting configuration
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 100;

// In-memory store for rate limiting (IP -> { count, windowStart })
const rateLimitStore: any = new Map<
  string,
  { count: number; windowStart: number }
>();

// Clean up old entries periodically (every 5 minutes)
const CLEANUP_INTERVAL_MS = 5 * 60 * 1000;
let lastCleanup = Date.now();

function cleanupOldEntries() {
  const now = Date.now();
  if (now - lastCleanup > CLEANUP_INTERVAL_MS) {
    for (const [ip, data] of rateLimitStore.entries()) {
      if (now - data.windowStart > RATE_LIMIT_WINDOW_MS) {
        rateLimitStore.delete(ip);
      }
    }
    lastCleanup = now;
  }
}

function getClientIP(request: NextRequest): string {
  // Check various headers for the real IP
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }

  const realIP = request.headers.get("x-real-ip");
  if (realIP) {
    return realIP;
  }

  // Fallback (may not always be available in Edge runtime)
  return request.ip ?? "unknown";
}

function checkRateLimit(ip: string): {
  allowed: boolean;
  remaining: number;
  resetIn: number;
} {
  const now = Date.now();
  const record = rateLimitStore.get(ip);

  if (!record || now - record.windowStart > RATE_LIMIT_WINDOW_MS) {
    // New window
    rateLimitStore.set(ip, { count: 1, windowStart: now });
    return {
      allowed: true,
      remaining: MAX_REQUESTS_PER_WINDOW - 1,
      resetIn: RATE_LIMIT_WINDOW_MS,
    };
  }

  // Existing window
  const resetIn = RATE_LIMIT_WINDOW_MS - (now - record.windowStart);

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return { allowed: false, remaining: 0, resetIn };
  }

  record.count++;
  return {
    allowed: true,
    remaining: MAX_REQUESTS_PER_WINDOW - record.count,
    resetIn,
  };
}

export function middleware(request: NextRequest) {
  // Periodic cleanup
  cleanupOldEntries();

  const clientIP = getClientIP(request);
  const { allowed, remaining, resetIn } = checkRateLimit(clientIP);

  if (!allowed) {
    // Block the request
    return new NextResponse(
      JSON.stringify({ error: "Too many requests. Please try again later." }),
      {
        status: 429,
        headers: {
          "Content-Type": "application/json",
          "X-RateLimit-Limit": MAX_REQUESTS_PER_WINDOW.toString(),
          "X-RateLimit-Remaining": "0",
          "X-RateLimit-Reset": Math.ceil(resetIn / 1000).toString(),
          "Retry-After": Math.ceil(resetIn / 1000).toString(),
        },
      }
    );
  }

  // Allow the request with rate limit headers
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-client-ip", clientIP);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  // Set rate limit info headers
  response.headers.set("X-RateLimit-Limit", MAX_REQUESTS_PER_WINDOW.toString());
  response.headers.set("X-RateLimit-Remaining", remaining.toString());
  response.headers.set(
    "X-RateLimit-Reset",
    Math.ceil(resetIn / 1000).toString()
  );
  response.headers.set("X-Client-IP", clientIP);
  console.log({
    clientIP,
    remaining,
    resetIn,
  });

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
