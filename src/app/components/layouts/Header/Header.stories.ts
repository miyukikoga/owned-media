import type { Meta, StoryObj } from "@storybook/react";

import { Header } from "@/app/components/layouts/Header";

const meta = {
  title: "App/Header",
  component: Header,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: { children: { control: "text" } },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    categories: [
      { id: "q2r8qu6t-l", name: "グルメ" },
      { id: "hpzd5iyz7h", name: "アニマル" },
    ],
    children: "Title",
  },
};
