import type { Meta, StoryObj } from "@storybook/react";

import { ProfileHeader } from "@/components/organisms/ProfileHeader";

const meta = {
  title: "App/ProfileHeader",
  component: ProfileHeader,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof ProfileHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
