import type { Meta, StoryObj } from "@storybook/react";

import { AppLink } from "./AppLink";

const meta = {
  title: "My/AppLink",
  component: AppLink,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    href: { control: "text" },
  },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Anchor",
    href: "http://localhost:6006/",
  },
};