import React from "react";

export type Tabs = {
  label?: string;
  content?: React.ReactNode;
  icon?: React.ReactElement;
};

export type Work = {
  id: number;
  workId: string;
  image: string;
  title: string;
  text: string;
  subtitle: string;
  color?: string;
  link?: string;
  textColor?: string;
  topBgFirstClr?: string | null;
  topBgSecondClr?: string | null;
  bottomBgSecondClr?: string | null;
  bottomBgFirstClr?: string | null;
  imageFirst?: boolean;
  url?:string;
};

/* text with cards */
export type textWithCards = {
  title?: string;
  btnTitle?: string;
  btnLink?: string;
  description?: string;
  enableImageLeft?: boolean;
  enableImageRight?: boolean;
  cards: Cards[];
};
type Cards = {
  icon?: React.ReactElement;
  cardTitle?: string;
};
/* end text with cards */

/* image with cards */
export type imageWithCards = {
  image?: string;
  cards: Cards[];
};
type imageCards = {
  title?: string;
  cardTitle?: string;
};
/* end image with cards */

export type imageWithText = {
  title?: string;
  subtitle?: string;
  btnTitle?: string;
  btnLink?: string;
  ctaLink?: string;
  ctaTitle?: string;
  description?: string;
  image?: string;
  imageFirst?: boolean;
  enableImageCenter?: boolean;
  enableImageleft?: boolean;
  enableImageRight?: boolean;
};

/* subservices card */
export type subServiceProps = {
  title?: string;
  content?: string;
  icon?: string;
};

export type icons =
  | "Circle"
  | "Consulting"
  | "Eye"
  | "Graphic"
  | "Leading"
  | "Misson"
  | "Promise"
  | "React"
  | "Round"
  | "Seo"
  | "Support"
  | "Wordpress";

// Blog & Articles Types

export type Author = {
  _id: string;
  name: string;
  image: string;
  role: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  __v: number | string;
};

export type Blog = {
  _id: string;
  title: string;
  slug: string;
  content: string | null;
  feature_image: string | null;
  createdAt: string;
  updatedAt: string;
  __v: number | string;
};

export type BlogPost = {
  _id: string;
  title: string;
  slug: string;
  feature_image: string;
  content: string;
  tags: string[] | null;
  views: number;
  likes: number;
  seo_title: string;
  seo_description: string;
  author: Author;
  comments: any[]; // Replace 'any[]' with the appropriate type if available
  blogs: Blog[];
  createdAt: string;
  updatedAt: string;
  __v: number | string;
};

export type ShopifyCaseStudy = {
  id: number;
  title: string;
  problem: string;
  solution: string;
  slug: string;
  image: string;
};