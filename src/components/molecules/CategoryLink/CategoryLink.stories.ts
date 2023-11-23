import type { Meta, StoryObj } from "@storybook/react";

import { CategoryLink } from "./CategoryLink";

const meta = {
  title: "App/CategoryLink",
  component: CategoryLink,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof CategoryLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    category: {
      id: "hu7ctlsefzq",
      name: "グルメ",
    },
  },
};
