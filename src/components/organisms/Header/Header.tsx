import { type ReactNode } from "react";
import { Logo } from "../../atoms/Logo";
import { HeaderMenu } from "../../molecules/HeaderMenu";
import { CategoryModal } from "@/components/organisms/CategoryModal";
import { Categories } from "@/types/categories";

type Props = {
  categories: Categories;
  children: ReactNode;
};

export const Header = ({ categories, children }: Props): JSX.Element => {
  return (
    <div className="grid grid-cols-2 my-5">
      <div className="col-span-1">
        <div className="flex relative">
          <div className="flex relative top-1 p-1 ">
            <CategoryModal categories={categories} />
          </div>
          <div className="">
            <Logo>{children}</Logo>
          </div>
        </div>
      </div>
      <div className="col-span-1 flex justify-end items-center mr-6">
        <HeaderMenu />
      </div>
    </div>
  );
};
