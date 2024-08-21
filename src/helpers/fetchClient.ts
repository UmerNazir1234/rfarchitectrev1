// export const BASE_URL = process.env.NEXT_PUBLIC_API_URL as string;
const BASE_URL =
  "https://rftechnologies-ajd6pr9pi-rf-technologies-projects.vercel.app";

/**
 * Type definition for the options parameter in fetchClient function.
 */
interface FetchOptions extends RequestInit {
  headers?: Record<string, string>;
}

/**
 * Centralized fetch function to handle common setup and processing.
 * @param {string} endpoint - The endpoint URL (relative to the base URL).
 * @param {FetchOptions} [options={}] - The fetch options including method, body, etc.
 * @returns {Promise<any>} The response from the fetch request.
 */
async function fetchClient(
  endpoint: string,
  options: FetchOptions = {}
): Promise<any> {
  const url = `${BASE_URL}${endpoint}`;

  try {
    const response = await fetch(url, {
      ...options,
    });
    if (!response?.ok) {
      return null;
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Fetch Client Error:", error);
    return null;
  }
}

export default fetchClient;
