import client from "@/lib/mongodb"; // Update this path as necessary
import { handleize } from "@/lib/utils";
import { NextResponse, type NextRequest } from "next/server";
import { ObjectId } from "mongodb";


export const revalidate = 60;

const articlesCollection = "articles";
const authorsCollection = "authors";
const commentsCollection = "comments";
const blogsCollection = "blogs";



export async function GET(request: NextRequest) {
  try {
    await client.connect();
    const db = client.db('company-site');

    // Get the slug from the search parameters
    const searchParams = request.nextUrl.searchParams;
    const slug = searchParams.get('slug');

    if (!slug) {
      return NextResponse.json(
        {
          message: "Article slug is required",
        },
        { status: 400 }
      );
    }

    // Find the article by slug
    const article = await db
      .collection(articlesCollection)
      .findOne({ slug });

    if (!article) {
      return NextResponse.json(
        {
          message: "Article not found",
        },
        { status: 404 }
      );
    }

    // Fetch author details
    const author = await db
      .collection(authorsCollection)
      .findOne({ _id: new ObjectId(article.author) });

    // Fetch blog details
    const blogs = await db
      .collection(blogsCollection)
      .find({ _id: { $in: article.blogIds.map((id: any) => new ObjectId(id)) } })
      .toArray();

    // Populate the article with author and blog details
    const populatedArticle = {
      ...article,
      author, // Include the author details
      blogs, // Include the blog details
    };

    return NextResponse.json(
      {
        message: "Article retrieved successfully",
        data: populatedArticle,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error retrieving article:", error);
    return NextResponse.json(
      {
        message: "Error retrieving article",
        error: error?.message,
      },
      { status: 500 }
    );
  }
}

