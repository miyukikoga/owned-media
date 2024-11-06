import type { Meta, StoryObj } from "@storybook/react";

import { Text } from "@/app/components/elements/Text";

const meta = {
  title: "App/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Medium: Story = {
  args: {
    children: "Text",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    children: "Text",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    children: "Text",
  },
};
