import client from "@/lib/mongodb";
import { NextResponse } from "next/server";
export async function GET(request: Request) {
  try {
    await client.connect();
    const db = client.db("company-site");
    const result = await db
      .collection("authors")
      .createIndex({ email: 1 }, { unique: true });
    return NextResponse.json({ message: `Index created: ${result}` });
  } catch (error: any) {
    console.error("Error creating index:", error);
    return NextResponse.json({
      message: "Error creating index",
      error: error?.message,
    });
  } finally {
    await client.close();
  }
}
