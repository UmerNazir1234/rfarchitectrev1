import { db } from "@/lib/firebase";
import { handleize } from "@/lib/utils";
import {
  doc,
  getDoc,
  collection,
  addDoc,
  getDocs,
  query,
  deleteDoc,
  updateDoc,
  Timestamp,
  increment,
  where,
} from "firebase/firestore";

import { NextResponse, type NextRequest } from "next/server";
export const runtime = 'edge';
export const revaliate = 30;
const blogsCollection = "blogs";
async function generateUniqueSlug(baseSlug:string) {
  let slug = baseSlug;
  let suffix = 1;
  
  while (true) {
    const q = query(collection(db, blogsCollection), where("slug", "==", slug));
    const existingSlugs = await getDocs(q);
    
    if (existingSlugs.empty) {
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
      created_at: Timestamp.now(),
      updated_at: Timestamp.now(),
    };

    const docRef = await addDoc(collection(db, blogsCollection), blog);

    return NextResponse.json(
      {
        message: "Blog created successfully",
        docId: docRef.id,
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

    const docRef = doc(db, "blogs", id);

    await updateDoc(docRef, {
      title,
      content,
      slug: updatedSlug,
      feature_image,
      updated_at: Timestamp.now(),
    });

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

    const docRef = doc(db, "blogs", id);

    await deleteDoc(docRef);

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