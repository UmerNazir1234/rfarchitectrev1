import sendEmail from "@/hooks/SendEmail";
import { NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(request: Request) {
  const { to, subject, text, html } = await request.json();

  if (!to || !subject || (!text && !html)) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 200 }
    );
  }

  try {
    await sendEmail({ to, subject, text, html });
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
