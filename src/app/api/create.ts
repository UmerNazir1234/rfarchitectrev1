import client from "@/lib/mongodb";

export default async function handler(req: any, res: any) {
  try {
    await client.connect();
    const db = client.db("company-site");
    const result = await db
      .collection("authors")
      .createIndex({ email: 1 }, { unique: true });
    res.status(200).json({ message: `Index created: ${result}` });
  } catch (error: any) {
    console.error("Error creating index:", error);
    res
      .status(500)
      .json({ message: "Error creating index", error: error?.message });
  } finally {
    await client.close();
  }
}
