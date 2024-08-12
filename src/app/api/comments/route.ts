import { db } from "@/lib/firebase";
import { collection, addDoc, Timestamp, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { NextResponse, type NextRequest } from "next/server";

export const runtime = 'edge';
export const revalidate = 60;
const commentsCollection = "comments";

export async function POST(request: NextRequest) {
  try {
    const { articleId, name, email, message } = await request.json();

    const comment = {
      articleId,
      name,
      email,
      message,
      published: false,
      created_at: Timestamp.now(),
      updated_at: Timestamp.now(),
    };

    const docRef = await addDoc(collection(db, commentsCollection), comment);

    return NextResponse.json(
      {
        message: "Comment added successfully",
        docId: docRef.id,
      },
      { status: 200 }
    );
  } catch (error:any) {
    console.error("Error adding comment:", error);
    return NextResponse.json(
      {
        message: "Error adding comment",
        error: error?.message,
      },
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const { id, status } = await request.json(); // Assume status is a boolean or other desired value

    if (status === undefined) {
      return NextResponse.json(
        {
          message: "Status is required",
        },
        { status: 400 }
      );
    }

    const docRef = doc(db, commentsCollection, id);

    await updateDoc(docRef, {
      published: status,
      updated_at: Timestamp.now(),
    });

    return NextResponse.json(
      {
        message: "Comment updated successfully",
        docId: id,
      },
      { status: 200 }
    );
  } catch (error:any) {
    console.error("Error updating comment:", error);
    return NextResponse.json(
      {
        message: "Error updating comment",
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
          message: "Comment ID is required",
        },
        { status: 400 }
      );
    }

    const docRef = doc(db, commentsCollection, id);

    await deleteDoc(docRef);

    return NextResponse.json(
      {
        message: "Comment deleted successfully",
        docId: id,
      },
      { status: 200 }
    );
  } catch (error:any) {
    console.error("Error deleting comment:", error);
    return NextResponse.json(
      {
        message: "Error deleting comment",
        error: error?.message,
      },
      { status: 500 }
    );
  }
}