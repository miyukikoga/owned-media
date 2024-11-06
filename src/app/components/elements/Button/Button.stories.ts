import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/app/components/elements/Button";

const meta = {
  title: "App/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: { control: "text" },
    label: { control: "text" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "登録",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "登録",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "登録",
  },
};
