import type { Meta, StoryObj } from "@storybook/react";

import { ProfileTable } from "@/features/profile/components/ProfileTable";

const meta = {
  title: "App/ProfileTable",
  component: ProfileTable,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof ProfileTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
