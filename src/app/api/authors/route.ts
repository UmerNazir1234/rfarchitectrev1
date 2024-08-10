import { db } from "@/lib/firebase";
import {
  collection,
  addDoc,
  Timestamp,
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { NextResponse, type NextRequest } from "next/server";

const authorsCollection = "authors";

export async function POST(request: Request) {
  try {
    const { name, image, role, email } = await request.json();

    if (!email) {
      return NextResponse.json(
        {
          message: "Email is required",
        },
        { status: 400 }
      );
    }

    // Check if email already exists
    const q = query(
      collection(db, authorsCollection),
      where("email", "==", email)
    );
    const existingAuthors = await getDocs(q);

    if (!existingAuthors.empty) {
      return NextResponse.json(
        {
          message: "Email already exists",
        },
        { status: 400 }
      );
    }

    const author = {
      name,
      image,
      role,
      email,
      created_at: Timestamp.now(),
      updated_at: Timestamp.now(),
    };

    const docRef = await addDoc(collection(db, authorsCollection), author);

    return NextResponse.json(
      {
        message: "Author added successfully",
        docId: docRef.id,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error adding author:", error);
    return NextResponse.json(
      {
        message: "Error adding author",
        error: error?.message,
      },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        {
          message: "Author ID is required",
        },
        { status: 400 }
      );
    }

    const docRef = doc(db, authorsCollection, id);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      return NextResponse.json(
        {
          message: "Author not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: "Author retrieved successfully",
        data: docSnap.data(),
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error retrieving author:", error);
    return NextResponse.json(
      {
        message: "Error retrieving author",
        error: error?.message,
      },
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const { id, name, image, role, email } = await request.json();

    if (!id) {
      return NextResponse.json(
        {
          message: "Author ID is required",
        },
        { status: 400 }
      );
    }

    if (email) {
      // Check if the new email already exists for another author
      const q = query(
        collection(db, authorsCollection),
        where("email", "==", email),
        where("id", "!=", id)
      );
      const existingAuthors = await getDocs(q);

      if (!existingAuthors.empty) {
        return NextResponse.json(
          {
            message: "Email already exists",
          },
          { status: 400 }
        );
      }
    }

    const docRef = doc(db, authorsCollection, id);

    await updateDoc(docRef, {
      name,
      image,
      role,
      email,
      updated_at: Timestamp.now(),
    });

    return NextResponse.json(
      {
        message: "Author updated successfully",
        docId: id,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error updating author:", error);
    return NextResponse.json(
      {
        message: "Error updating author",
        error: error?.message,
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        {
          message: "Author ID is required",
        },
        { status: 400 }
      );
    }

    const docRef = doc(db, authorsCollection, id);

    await deleteDoc(docRef);

    return NextResponse.json(
      {
        message: "Author deleted successfully",
        docId: id,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error deleting author:", error);
    return NextResponse.json(
      {
        message: "Error deleting author",
        error: error?.message,
      },
      { status: 500 }
    );
  }
}
