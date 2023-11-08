import type { ComponentPropsWithoutRef } from "react";
import Image from "next/image";

type Props = ComponentPropsWithoutRef<typeof Image> & {
  alt: string;
  radius?: boolean;
  sizePx?: number;
};

export const AppImage = ({
  radius = false,
  sizePx = 400,
  alt,
  src,
}: Props): JSX.Element => {
  const mode = radius ? "rounded-full" : "";
  return (
    <div className={`cursor-pointer`}>
      <Image
        priority
        alt={alt}
        src={src}
        width={sizePx}
        height={sizePx}
        className={mode}
      />
    </div>
  );
};
