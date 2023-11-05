import type { ComponentPropsWithoutRef } from "react";
import { type ReactNode } from "react";
import Link from "next/link";

type Props = ComponentPropsWithoutRef<typeof Link> & {
  children?: ReactNode;
};

export const AppLink = ({ children, ...props }: Props): JSX.Element => {
  return (
    <Link className="cursor-pointer underline" prefetch={false} {...props}>
      {children}
    </Link>
  );
};
