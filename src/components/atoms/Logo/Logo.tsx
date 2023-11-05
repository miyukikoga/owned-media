import { type ReactNode } from "react";
import { Size } from "../../../types/styles";
import { getTextSizeClassName } from "../../../features/styles";

type Props = {
  size?: Size;
  children: ReactNode;
};

export const Logo = ({ size = "medium", children }: Props): JSX.Element => {
  const textSize = getTextSizeClassName(size);
  return (
    <p
      className={`font-body cursor-pointer bg-cyan-500 hover:bg-cyan-600 font-bold text-white rounded inline-block p-3 ${textSize}`}
    >
      {children}
    </p>
  );
};
