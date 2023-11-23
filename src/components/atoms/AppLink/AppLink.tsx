import type { ComponentPropsWithoutRef } from "react";
import { type ReactNode } from "react";
import Link from "next/link";

type Props = ComponentPropsWithoutRef<typeof Link> & {
  needUnderline?: boolean;
  children?: ReactNode;
};

export const AppLink = ({
  needUnderline = false,
  children,
  ...props
}: Props): JSX.Element => {
  const underline = needUnderline ? "underline" : "";
  return (
    <Link className={`cursor-pointer ${underline}`} prefetch={false} {...props}>
      {children}
    </Link>
  );
};
