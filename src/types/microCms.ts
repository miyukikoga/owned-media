export type MicroCMSContentEyeCatch = {
  url: string;
  height: number;
  width: number;
};

export type MicroCMSContentCategory = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
};

export type MicroCMSContent = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  content: string;
  eyecatch: MicroCMSContentEyeCatch;
  category: MicroCMSContentCategory;
};
