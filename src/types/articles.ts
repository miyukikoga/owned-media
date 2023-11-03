export type Article = {
  id: string;
  title: string;
  content: string;
  category: string;
  createdAt: string;
  eyeCatch: `https${string}`;
};

export type Articles = Article[];
