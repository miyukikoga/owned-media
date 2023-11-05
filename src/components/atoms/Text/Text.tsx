import { type ReactNode } from "react";
import { Size } from "../../../types/styles";
import { getTextSizeClassName } from "../../../features/styles";

type Props = {
  size?: Size;
  children: ReactNode;
};

export const Text = ({ size = "medium", children }: Props): JSX.Element => {
  const textSize = getTextSizeClassName(size);
  return <span className={`font-body ${textSize}`}>{children}</span>;
};
