import React from "react";
import Image from "next/image";
import styles from "./image.module.scss";

type ImageProps = {
  radius?: boolean;
  size?: "small" | "medium" | "large";
  alt?: string;
  src: string;
};

export const MyImage = ({
  radius = false,
  size = "medium",
  alt = "",
  src,
}: ImageProps) => {
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
