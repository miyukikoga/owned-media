import type { Meta, StoryObj } from "@storybook/react";

import { MyImage } from "./Image";
import imageFile from "../../../../public/profile.png";

const meta = {
  title: "My/Image",
  component: MyImage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    radius: { control: "boolean" },
    alt: { control: "text" },
    src: { control: "text" },
  },
} satisfies Meta<typeof MyImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Radius: Story = {
  args: {
    radius: true,
    alt: "MyImage",
    src: imageFile.src,
  },
};

export const Large: Story = {
  args: {
    radius: false,
    size: "large",
    alt: "MyImage",
    src: imageFile.src,
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
    alt: "MyImage",
    src: imageFile.src,
  },
};

export const Small: Story = {
  args: {
    size: "small",
    alt: "MyImage",
    src: imageFile.src,
  },
};
