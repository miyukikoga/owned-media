import type { Meta, StoryObj } from "@storybook/react";

import { List } from "@/components/atoms/List";

const meta = {
  title: "App/List",
  component: List,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    horizontal: { control: "boolean" },
    childrenList: { control: "object" },
  },
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  args: {
    horizontal: true,
    childrenList: ["a", "b", "c"],
  },
};

export const Large: Story = {
  args: {
    size: "large",
    childrenList: ["a", "b", "c"],
  },
};

export const Small: Story = {
  args: {
    size: "small",
    childrenList: ["a", "b", "c"],
  },
};
