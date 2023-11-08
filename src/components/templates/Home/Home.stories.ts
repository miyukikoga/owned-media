import type { Meta, StoryObj } from "@storybook/react";

import { Home } from "./Home";

const meta = {
  title: "App/Home",
  component: Home,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Home>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    articles: [
      {
        id: "o5gu6ibjvb",
        title: "たけのこ",
        content: "たけのこ、美味しいね",
        category: "グルメ",
        createdAt: "2023-04-05T09:23:31.664Z",
        eyeCatch:
          "https://images.microcms-assets.io/assets/cab7c47596804df6b0612f18468b57a8/6b91e158bb4244b68d5004de7753094c/blog-template.png",
      },
      {
        id: "2ppgmb350ytz",
        title: "初めてのブログ",
        content: "初めまして。",
        category: "日常",
        createdAt: "2023-04-05T21:53:43.952Z",
        eyeCatch:
          "https://images.microcms-assets.io/assets/cab7c47596804df6b0612f18468b57a8/6b91e158bb4244b68d5004de7753094c/blog-template.png",
      },
    ],
  },
};
