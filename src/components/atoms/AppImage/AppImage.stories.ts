import type { Meta, StoryObj } from "@storybook/react";

import { AppImage } from "./AppImage";
import imageFile from "../../../../public/profile.png";

const meta = {
  title: "App/Image",
  component: AppImage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    sizePx: { control: "number" },
    radius: { control: "boolean" },
    alt: { control: "text" },
    src: { control: "text" },
  },
} satisfies Meta<typeof AppImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Radius: Story = {
  args: {
    radius: true,
    alt: "AppImage",
    src: imageFile.src,
  },
};

export const Large: Story = {
  args: {
    radius: false,
    sizePx: 800,
    alt: "AppImage",
    src: imageFile.src,
  },
};

export const Medium: Story = {
  args: {
    sizePx: 400,
    alt: "AppImage",
    src: imageFile.src,
  },
};

export const Small: Story = {
  args: {
    sizePx: 100,
    alt: "AppImage",
    src: imageFile.src,
  },
};
