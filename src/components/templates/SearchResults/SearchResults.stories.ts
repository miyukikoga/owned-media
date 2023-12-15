import type { Meta, StoryObj } from "@storybook/react";

import { SearchResults } from "@/components/templates/SearchResults";

const meta = {
  title: "App/SearchResults",
  component: SearchResults,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof SearchResults>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    articles: [
      {
        id: "o5gu6ibjvb",
        title: "たけのこ",
        content: "たけのこ、美味しいね",
        category: { id: "q2r8qu6t-l", name: "グルメ" },
        createdAt: "2023-04-05T09:23:31.664Z",
        updatedAt: "2023-10-10T09:23:31.664Z",
        eyeCatch:
          "https://images.microcms-assets.io/assets/cab7c47596804df6b0612f18468b57a8/6b91e158bb4244b68d5004de7753094c/blog-template.png",
      },
      {
        id: "2ppgmb350ytz",
        title: "トマト",
        content: "トマトも、美味しいね",
        category: { id: "q2r8qu6t-l", name: "グルメ" },
        createdAt: "2023-04-05T21:53:43.952Z",
        updatedAt: "2023-10-10T09:23:31.664Z",
        eyeCatch:
          "https://images.microcms-assets.io/assets/cab7c47596804df6b0612f18468b57a8/6b91e158bb4244b68d5004de7753094c/blog-template.png",
      },
    ],
  },
};
