import { type ReactNode } from "react";
import { Logo } from "../../atoms/Logo";
import { HeaderMenu } from "../../molecules/HeaderMenu";

type Props = {
  children: ReactNode;
};

export const Header = ({ children }: Props): JSX.Element => {
  return (
    <div className="grid grid-cols-2 my-5">
      <div className="col-span-1 ml-5">
        <Logo>{children}</Logo>
      </div>
      <div className="col-span-1 flex justify-end items-center mr-6">
        <HeaderMenu />
      </div>
    </div>
  );
};
