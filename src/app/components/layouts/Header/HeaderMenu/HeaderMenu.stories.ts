import type { Meta, StoryObj } from "@storybook/react";

import { HeaderMenu } from "@/app/components/layouts/Header/HeaderMenu";

const meta = {
  title: "App/HeaderMenu",
  component: HeaderMenu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof HeaderMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
