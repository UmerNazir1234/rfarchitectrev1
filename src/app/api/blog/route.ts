import client from "@/lib/mongodb"; // Assuming you have a MongoDB connection setup
import { handleize } from "@/lib/utils";
import { ObjectId } from "mongodb";
import { NextResponse, type NextRequest } from "next/server";


const blogsCollection = "blogs";

async function generateUniqueSlug(baseSlug: string) {
  let slug = baseSlug;
  let suffix = 1;

  while (true) {
    await client.connect();
    const db = client.db('company-site');
    const existingSlugs = await db.collection(blogsCollection).find({ slug }).toArray();

    if (existingSlugs.length === 0) {
      return slug;
    }

    slug = `${baseSlug}-${suffix}`;
    suffix += 1;
  }
}

export async function POST(request: Request) {
  try {
    const { title, content, feature_image } = await request.json();
    const baseSlug = handleize(title);
    const uniqueSlug = await generateUniqueSlug(baseSlug);

    const blog = {
      title,
      content,
      slug: uniqueSlug,
      feature_image,
      created_at: new Date(),
      updated_at: new Date(),
    };
    await client.connect();
    const db = client.db('company-site');
    const result = await db.collection(blogsCollection).insertOne(blog);

    return NextResponse.json(
      {
        message: "Blog created successfully",
        docId: result.insertedId,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error creating blog:", error);
    return NextResponse.json(
      {
        message: "Error creating blog",
        error: error?.message,
      },
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const { id, title, content, feature_image, slug } = await request.json();

    if (!id) {
      return NextResponse.json(
        {
          message: "Blog ID is required",
        },
        { status: 400 }
      );
    }

    let updatedSlug = handleize(title);

    if (slug && slug !== handleize(title)) {
      updatedSlug = await generateUniqueSlug(updatedSlug);
    }
    await client.connect();
    const db = client.db('company-site');
    const result = await db.collection(blogsCollection).updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          title,
          content,
          slug: updatedSlug,
          feature_image,
          updated_at: new Date(),
        },
      }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json(
        {
          message: "Blog not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: "Blog updated successfully",
        docId: id,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error updating blog:", error);
    return NextResponse.json(
      {
        message: "Error updating blog",
        error: error?.message,
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { id } = await request.json();

    if (!id) {
      return NextResponse.json(
        {
          message: "Blog ID is required",
        },
        { status: 400 }
      );
    }
    await client.connect();
    const db = client.db('company-site');
    const result = await db.collection(blogsCollection).deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return NextResponse.json(
        {
          message: "Blog not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: "Blog deleted successfully",
        docId: id,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error deleting blog:", error);
    return NextResponse.json(
      {
        message: "Error deleting blog",
        error: error?.message,
      },
      { status: 500 }
    );
  }
}
