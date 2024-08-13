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
  textColor?: string;
  topBgFirstClr?: string | null;
  topBgSecondClr?: string | null;
  bottomBgSecondClr?: string | null;
  bottomBgFirstClr?: string | null;
  imageFirst?: boolean;
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
  image: string | null;
  role: string | null;
  email: string;
  created_at: string;
  updated_at: string;
};
export type BlogPost = {
  _id: string;
  title: string;
  feature_image: string | null;
  created_at: string;
  updated_at: string;
  content: string;
  tags: string[] | null;
  slug: string;
  author: Author;
  comments: any[]; // You can further define the structure of comments if needed
  views: number | null;
  likes: number | null;
  blogIds: string[];
  blogs?: any; // Assuming blogIds is an array of strings, modify if it's different
  seo_title: string;
  seo_description: string;
};
