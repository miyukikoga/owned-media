import type { Meta, StoryObj } from "@storybook/react";

import { MyLink } from "./Link";

const meta = {
  title: "My/Link",
  component: MyLink,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    href: { control: "text" },
  },
} satisfies Meta<typeof MyLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Anchor",
    href: "http://localhost:6006/",
  },
};
