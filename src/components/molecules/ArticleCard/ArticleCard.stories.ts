import type { Meta, StoryObj } from "@storybook/react";

import { ArticleCard } from "@/components/molecules/ArticleCard";

const meta = {
  title: "App/Article",
  component: ArticleCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof ArticleCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    article: {
      id: "o5gu6ibjvb",
      title: "ねことたけのこ",
      content: "ねこがたけのこを食べる",
      category: { id: "q2r8qu6t-l", name: "グルメ" },
      createdAt: "2023-04-05T09:23:31.664Z",
      updatedAt: "2023-10-10T09:23:31.664Z",
      eyeCatch:
        "https://images.microcms-assets.io/assets/cab7c47596804df6b0612f18468b57a8/6b91e158bb4244b68d5004de7753094c/blog-template.png",
    },
  },
};
