import type { ComponentPropsWithoutRef } from "react";
import { type ReactNode } from "react";
import { Size } from "../../../types/styles";
import { getTextSizeClassName } from "../../../features/styles";

type Props = ComponentPropsWithoutRef<"time"> & {
  size?: Size;
  children: ReactNode;
};

export const Time = ({
  size = "medium",
  children,
  ...props
}: Props): JSX.Element => {
  const textSize = getTextSizeClassName(size);
  return (
    <time className={`font-body ${textSize}`} {...props}>
      {children}
    </time>
  );
};
