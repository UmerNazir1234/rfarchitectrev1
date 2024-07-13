import React from "react";

export type Tabs = {
  label?: string;
  content?: React.ReactNode;
  icon?: React.ReactElement;
};

export type Work = {
  image: string;
  title: string;
  text: string;
  subtitle: string;
  color?: string;
  textColor?: string;
};

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


export type imageWithText = {
  title?: string;
  btnTitle?: string;
  btnLink?: string;
  ctaLink?:string;
  ctaTitle?:string;
  description?: string;
  image?:string;
  imageFirst?:boolean
  enableImageCenter?: boolean;
  enableImageRight?: boolean;
};