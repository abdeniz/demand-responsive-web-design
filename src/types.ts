export type Article = {
  title: string;
  excerpt: string;
  category: string;
  date: Date;
  author: string;
  authorJobTitle: string;
  authorImgUrl: string;
  articleImage: ArticleImage;
  isMain?: boolean;
};

export type GradientColors = {
  color1: string;
  color2: string;
  color3: string;
};

export type ArticleImage = {
  originalImgUrl: string;
  compressedImgUrl: string;
  imageDescription: string;
  gradient: GradientColors;
};
