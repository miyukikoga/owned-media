import type { Meta, StoryObj } from "@storybook/react";

import { TopicPath } from "@/components/organisms/TopicPath";

const meta = {
  title: "App/TopicPath",
  component: TopicPath,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof TopicPath>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    pathList: [
      {
        name: "ホーム",
        href: "/",
      },
      {
        name: "アニマル",
        href: "/categories/hpzd5iyz7h",
      },
    ],
  },
};
