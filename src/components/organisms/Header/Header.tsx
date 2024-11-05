import { type ReactNode } from "react";
import { Logo } from "@/components/atoms/Logo";
import { AppLink } from "@/components/atoms/AppLink";
import { HeaderMenu } from "@/components/molecules/HeaderMenu";
import { CategoryModal } from "@/components/organisms/CategoryModal";
import { Categories } from "@/types/categories";

type Props = {
  categories: Categories;
  children: ReactNode;
};

export const Header = ({ categories, children }: Props) => {
  return (
    <>
      <div className="grid grid-cols-2 my-3">
        <div className="col-span-1">
          <div className="flex relative">
            <div className="flex relative top-1 p-1 ">
              <CategoryModal categories={categories} />
            </div>
            <div className="">
              <AppLink href="/">
                <Logo>{children}</Logo>
              </AppLink>
            </div>
          </div>
        </div>
        <div className="col-span-1 flex justify-end items-center mr-6">
          <HeaderMenu />
        </div>
      </div>
      <hr className="border-gray-500 border-1" />
    </>
  );
};
