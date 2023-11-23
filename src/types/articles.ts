export type Category = {
  id: string;
  name: string;
};

export type Article = {
  id: string;
  title: string;
  content: string;
  category: Category;
  createdAt: string;
  updatedAt: string;
  eyeCatch: `https${string}`;
};

export type Articles = Article[];
