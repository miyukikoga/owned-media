import type { ComponentPropsWithoutRef } from "react";
import Image from "next/image";
import styles from "./appImage.module.css";

type Props = ComponentPropsWithoutRef<typeof Image> & {
  alt: string;
  radius?: boolean;
  size?: "small" | "medium" | "large";
};

export const AppImage = ({
  radius = false,
  size = "medium",
  alt,
  src,
}: Props): JSX.Element => {
  const mode = radius ? styles.radius : "";
  return (
    <div className={[styles.image, styles[size], mode].join(" ")}>
      <Image
        priority
        alt={alt}
        src={src}
        fill
        style={{ objectFit: "cover" }}
        sizes="100%"
      />
    </div>
  );
};
