import client from "@/lib/mongodb";
import { NextResponse, type NextRequest } from "next/server";
import { ObjectId } from "mongodb";

export const revalidate = 60;
const authorsCollection = "authors";

// POST: Add a new author
export async function POST(request: Request) {
  try {
    const { name, image, role, email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { message: "Email is required" },
        { status: 400 }
      );
    }

    await client.connect();
    const db = client.db('company-site');

    // Check if email already exists
    const existingAuthor = await db.collection(authorsCollection).findOne({ email });

    if (existingAuthor) {
      return NextResponse.json(
        { message: "Email already exists" },
        { status: 400 }
      );
    }

    const author = {
      name,
      image,
      role,
      email,
      created_at: new Date(),
      updated_at: new Date(),
    };

    const result = await db.collection(authorsCollection).insertOne(author);

    return NextResponse.json(
      { message: "Author added successfully", docId: result.insertedId },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error adding author:", error);
    return NextResponse.json(
      { message: "Error adding author", error: error?.message },
      { status: 500 }
    );
  }
}

// GET: Retrieve an author by ID
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { message: "Author ID is required" },
        { status: 400 }
      );
    }

    await client.connect();
    const db = client.db('company-site');

    const author = await db
      .collection(authorsCollection)
      .findOne({ _id: new ObjectId(id) });

    if (!author) {
      return NextResponse.json(
        { message: "Author not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Author retrieved successfully", data: author },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error retrieving author:", error);
    return NextResponse.json(
      { message: "Error retrieving author", error: error?.message },
      { status: 500 }
    );
  }
}

// PATCH: Update an author
export async function PATCH(request: NextRequest) {
  try {
    const { id, name, image, role, email } = await request.json();

    if (!id) {
      return NextResponse.json(
        { message: "Author ID is required" },
        { status: 400 }
      );
    }

    await client.connect();
    const db = client.db('company-site');

    if (email) {
      // Check if the new email already exists for another author
      const existingAuthor = await db
        .collection(authorsCollection)
        .findOne({ email, _id: { $ne: new ObjectId(id) } });

      if (existingAuthor) {
        return NextResponse.json(
          { message: "Email already exists" },
          { status: 400 }
        );
      }
    }

    const updateData = {
      name,
      image,
      role,
      email,
      updated_at: new Date(),
    };

    const result = await db
      .collection(authorsCollection)
      .updateOne({ _id: new ObjectId(id) }, { $set: updateData });

    if (result.matchedCount === 0) {
      return NextResponse.json(
        { message: "Author not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Author updated successfully", docId: id },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error updating author:", error);
    return NextResponse.json(
      { message: "Error updating author", error: error?.message },
      { status: 500 }
    );
  }
}

// DELETE: Delete an author by ID
export async function DELETE(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { message: "Author ID is required" },
        { status: 400 }
      );
    }

    await client.connect();
    const db = client.db('company-site');

    const result = await db
      .collection(authorsCollection)
      .deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { message: "Author not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Author deleted successfully", docId: id },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error deleting author:", error);
    return NextResponse.json(
      { message: "Error deleting author", error: error?.message },
      { status: 500 }
    );
  }
}
