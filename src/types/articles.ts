export type ArticleType = {
  id: string;
  title: string;
  content: string;
  category: string;
  createdAt: Date;
  eyeCatch: string;
};

export type ArticlesType = ArticleType[];
