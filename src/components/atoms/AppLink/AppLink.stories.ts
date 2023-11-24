import type { Meta, StoryObj } from "@storybook/react";

import { AppLink } from "@/components/atoms/AppLink";

const meta = {
  title: "App/AppLink",
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

export const Underline: Story = {
  args: {
    needUnderline: true,
    children: "Anchor",
    href: "http://localhost:6006/",
  },
};
