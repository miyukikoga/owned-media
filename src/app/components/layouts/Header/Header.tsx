import { type ReactNode } from "react";
import { Logo } from "@/app/components/elements/Logo";
import { AppLink } from "@/app/components/elements/AppLink";
import { HeaderMenu } from "@/app/components/layouts/Header/HeaderMenu";
import { CategoryModal } from "@/features/categories/components/CategoryModal";
import { Categories } from "@/features/categories/types/categoryTypes";

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
