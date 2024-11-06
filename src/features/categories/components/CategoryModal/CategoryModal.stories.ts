import type { Meta, StoryObj } from "@storybook/react";

import { CategoryModal } from "@/features/categories/components/CategoryModal";

const meta = {
  title: "App/CategoryModal",
  component: CategoryModal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof CategoryModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    categories: [
      { id: "q2r8qu6t-l", name: "グルメ" },
      { id: "hpzd5iyz7h", name: "アニマル" },
    ],
  },
};
