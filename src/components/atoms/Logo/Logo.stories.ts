import type { Meta, StoryObj } from "@storybook/react";

import { Logo } from "@/components/atoms/Logo";

const meta = {
  title: "App/Logo",
  component: Logo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Medium: Story = {
  args: {
    children: "Logo",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    children: "Logo",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    children: "Logo",
  },
};
