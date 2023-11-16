import { type ReactNode } from "react";
import { Logo } from "../../atoms/Logo";
import { AppLink } from "../../atoms/AppLink";
import { HeaderMenu } from "../../molecules/HeaderMenu";

type Props = {
  children: ReactNode;
};

export const Header = ({ children }: Props): JSX.Element => {
  return (
    <>
      <div className="grid grid-cols-2 my-3">
        <div className="col-span-1 ml-5">
          <AppLink href="/">
            <Logo>{children}</Logo>
          </AppLink>
        </div>
        <div className="col-span-1 flex justify-end items-center mr-6">
          <HeaderMenu />
        </div>
      </div>
      <hr className="border-gray-500 border-1 mb-5" />
    </>
  );
};
