import type { Meta, StoryObj } from "@storybook/react";

import { Article } from "./Article";

const meta = {
  title: "My/Article",
  component: Article,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Article>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    article: {
      id: "o5gu6ibjvb",
      title: "たけのこ",
      content: "たけのこ、美味しいね",
      category: "グルメ",
      createdAt: "2023-04-05T09:23:31.664Z",
      eyeCatch:
        "https://images.microcms-assets.io/assets/cab7c47596804df6b0612f18468b57a8/6b91e158bb4244b68d5004de7753094c/blog-template.png",
    },
  },
};
