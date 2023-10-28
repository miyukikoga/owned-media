import type { Meta, StoryObj } from "@storybook/react";

import { Time } from "./Time";

const meta = {
  title: "My/Time",
  component: Time,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Time>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Medium: Story = {
  args: {
    dateTime: new Date("2023-10-10"),
    children: "2023年10月10日",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    dateTime: new Date("2023-10-10"),
    children: "2023年10月10日",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    dateTime: new Date("2023-10-10"),
    children: "2023年10月10日",
  },
};
