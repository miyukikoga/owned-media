import type { Meta, StoryObj } from "@storybook/react";

import { Profile } from "@/components/templates/Profile";

const meta = {
  title: "App/Profile",
  component: Profile,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Profile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
