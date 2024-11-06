import type { Meta, StoryObj } from "@storybook/react";

import { Time } from "@/app/components/elements/Time";

const meta = {
  title: "App/Time",
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
    dateTime: "2023-10-10T21:53:43.952Z",
    children: "2023年10月10日",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    dateTime: "2023-10-10T21:53:43.952Z",
    children: "2023年10月10日",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    dateTime: "2023-10-10T21:53:43.952Z",
    children: "2023年10月10日",
  },
};
