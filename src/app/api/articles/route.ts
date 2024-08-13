import client from "@/lib/mongodb"; // Update this path as necessary
import { handleize } from "@/lib/utils";
import { NextResponse, type NextRequest } from "next/server";
import { ObjectId } from "mongodb";


export const revalidate = 60;

const articlesCollection = "articles";
const authorsCollection = "authors";
const commentsCollection = "comments";
const blogsCollection = "blogs";

async function generateUniqueSlug(
  baseSlug: string,
  currentSlug: string,
  collection: any
) {
  let slug = baseSlug;
  let suffix = 1;

  while (true) {
    const existingSlug = await collection.findOne({ slug });

    if (
      !existingSlug ||
      (slug === currentSlug && existingSlug.slug === currentSlug)
    ) {
      return slug;
    }

    slug = `${baseSlug}-${suffix}`;
    suffix += 1;
  }
}

export async function GET(request: NextRequest) {
  try {
    await client.connect();
    const db = client.db('company-site');

    const articles = await db.collection(articlesCollection).find({}).toArray();
    // Fetch the author and blog details for each article
    const populatedArticles = await Promise.all(
      articles.map(async (article: any) => {
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
        return {
          ...article,
          author, // Include the author details
          blogs, // Include the blog details
        };
      })
    );

    return NextResponse.json(
      {
        message: "Articles retrieved successfully",
        data: populatedArticles,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error retrieving articles:", error);
    return NextResponse.json(
      {
        message: "Error retrieving articles",
        error: error?.message,
      },
      { status: 500 }
    );
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
      seo_title, // New field
      seo_description, // New field
    } = await request.json();

    const now = new Date();
    const baseSlug = handleize(title);

    await client.connect();
    const db = client.db('company-site');

    const uniqueSlug = await generateUniqueSlug(
      baseSlug,
      "",
      db.collection(articlesCollection)
    );

    const article = {
      title,
      feature_image,
      created_at: now,
      updated_at: now,
      content,
      tags,
      slug: uniqueSlug,
      author: new ObjectId(authorId),
      comments: [],
      views,
      likes,
      blogIds: blogIds.map((id:any) => new ObjectId(id)),
      seo_title, // New field
      seo_description, // New fie
    };

    const result = await db.collection(articlesCollection).insertOne(article);

    return NextResponse.json(
      {
        message: "Article added successfully",
        docId: result.insertedId,
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
    const { id, title, feature_image, content, tags, blogIds, slug,seo_title, seo_description } =
      await request.json();

    const now = new Date();

    await client.connect();
    const db = client.db('company-site');

    const existingArticle = await db
      .collection(articlesCollection)
      .findOne({ _id: new ObjectId(id) });
    if (!existingArticle) {
      return NextResponse.json(
        {
          message: "Article not found",
        },
        { status: 404 }
      );
    }

    const baseSlug = handleize(title);
    let updatedSlug = slug;

    if (baseSlug !== existingArticle.slug) {
      updatedSlug = await generateUniqueSlug(
        baseSlug,
        existingArticle.slug,
        db.collection(articlesCollection)
      );
    }

    const updatedData = {
      title,
      feature_image,
      content,
      tags,
      blogIds: blogIds.map((id:any) => new ObjectId(id)),
      slug: updatedSlug,
      updated_at: now,
      seo_title, // New field
      seo_description, // New field
    };

    await db
      .collection(articlesCollection)
      .updateOne({ _id: new ObjectId(id) }, { $set: updatedData });

    return NextResponse.json(
      {
        message: "Article updated successfully",
        docId: id,
      },
      { status: 200 }
    );
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
    const { slug } = await request.json();

    if (!slug) {
      return NextResponse.json(
        {
          message: "Article slug is required",
        },
        { status: 400 }
      );
    }

    await client.connect();
    const db = client.db('company-site');

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

    const articleId = article._id;

    // Delete the article
    const articleResult = await db
      .collection(articlesCollection)
      .deleteOne({ _id: articleId });

    // Delete related comments
    const commentsResult = await db
      .collection(commentsCollection)
      .deleteMany({ articleId: articleId.toString() });


    return NextResponse.json(
      {
        message: "Article and related comments deleted successfully",
        docId: articleId,
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
