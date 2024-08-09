import { db } from "@/lib/firebase";
import { handleize } from "@/lib/utils";
import {
  collection,
  addDoc,
  Timestamp,
  doc,
  updateDoc,
  deleteDoc,
  getDocs,
  writeBatch,
  where,
  query,
  getDoc,
  arrayRemove,
} from "firebase/firestore";
import { NextResponse, type NextRequest } from "next/server";

const articlesCollection = "articles";
const authorsCollection = "authors";
const commentsCollection = "comments";
const blogsCollection = "blogs";

async function generateUniqueSlug(baseSlug: string, currentSlug: string) {
  let slug = baseSlug;
  let suffix = 1;

  while (true) {
    const q = query(
      collection(db, articlesCollection),
      where("slug", "==", slug)
    );
    const existingSlugs = await getDocs(q);

    if (
      existingSlugs.empty ||
      (slug === currentSlug && existingSlugs.size === 1)
    ) {
      return slug;
    }

    slug = `${baseSlug}-${suffix}`;
    suffix += 1;
  }
}

export async function POST(request: Request) {
  try {
    const {
      title,
      feature_image,
      content,
      tags,
      authorId, // Assume this is the ID of the author
      views = 0,
      likes = 0,
      blogIds = [], // List of blog IDs where the article will be added
    } = await request.json();

    const now = Timestamp.now();
    const baseSlug = handleize(title);
    const uniqueSlug = await generateUniqueSlug(baseSlug, "");

    const article = {
      title,
      feature_image,
      created_at: now,
      updated_at: now,
      content,
      tags,
      slug: uniqueSlug,
      author: authorId, // Reference to the author
      comments: [], // Initialize with an empty array
      views,
      likes,
      blogIds, // List of blog IDs
    };

    const docRef = await addDoc(collection(db, articlesCollection), article);

    return NextResponse.json(
      {
        message: "Article added successfully",
        docId: docRef.id,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error adding article:", error);
    return NextResponse.json(
      {
        message: "Error adding article",
        error: error?.message,
      },
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const { id, title, feature_image, content, tags, blogIds,slug } =
      await request.json();

    // Update the updated_at timestamp
    const updatedData = {
      title,
      feature_image,
      content,
      tags,
      blogIds,
      slug,
      updated_at: Timestamp.now(),
    };

    // Handle slug update if title changes
    const existingArticle = await getDoc(doc(db, articlesCollection, id));
    if (existingArticle !== undefined) {
      const currentSlug = existingArticle?.data()?.slug;
      const baseSlug = handleize(title);

      if (baseSlug !== currentSlug) {
        updatedData.slug = await generateUniqueSlug(baseSlug, currentSlug);
      }

      const docRef = doc(db, articlesCollection, id);
      await updateDoc(docRef, updatedData);

      return NextResponse.json(
        {
          message: "Article updated successfully",
          docId: id,
        },
        { status: 200 }
      );
    } else {
    }
  } catch (error: any) {
    console.error("Error updating article:", error);
    return NextResponse.json(
      {
        message: "Error updating article",
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
          message: "Article ID is required",
        },
        { status: 400 }
      );
    }

    // Create a batch
    const batch = writeBatch(db);

    // Delete the article
    const articleRef = doc(db, articlesCollection, id);
    batch.delete(articleRef);

    // Optionally, delete related comments
    const commentsQuery = query(collection(db, commentsCollection), where("articleId", "==", id));
    const commentsSnapshot = await getDocs(commentsQuery);
    commentsSnapshot.docs.forEach((commentDoc) => {
      batch.delete(commentDoc.ref);
    });

    // Optionally, remove article from all associated blogs
    const blogsSnapshot = await getDocs(query(collection(db, blogsCollection), where("articles", "array-contains", id)));
    blogsSnapshot.docs.forEach((blogDoc) => {
      const blogRef = doc(db, blogsCollection, blogDoc.id);
      batch.update(blogRef, {
        articles: arrayRemove(id)
      });
    });

    // Commit the batch
    await batch.commit();

    return NextResponse.json(
      {
        message: "Article and related comments deleted successfully",
        docId: id,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error deleting article:", error);
    return NextResponse.json(
      {
        message: "Error deleting article",
        error: error?.message,
      },
      { status: 500 }
    );
  }
}

