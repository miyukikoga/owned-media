"use client";

import { List } from "@/app/components/elements/List";
import { Text } from "@/app/components/elements/Text";
import { CategoryLink } from "@/features/categories/components/CategoryLink";
import { Categories } from "@/features/categories/types/categoryTypes";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

type Props = {
  categories: Categories;
};

export const CategoryModal = ({ categories }: Props) => {
  let [isOpen, setIsOpen] = useState(false);
  const categoryList = categories.map((category, index) => (
    <CategoryLink category={category} key={index} handleClick={closeModal} />
  ));

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <GiHamburgerMenu
        className="cursor-pointer"
        size="1.5em"
        onClick={openModal}
      />

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            enter="transition-opacity ease-in-out duration-250"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-in-out duration-250"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-start justify-start p-4 mt-20 text-center">
              <Transition.Child
                className="absolute inset-0 z-40 flex"
                enter="transition ease duration-250 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease duration-250 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="mr-20 w-full max-w-md transform overflow-hidden bg-gray-50 p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-bold leading-6 text-gray-900"
                  >
                    <Text>カテゴリー</Text>
                    <AiOutlineClose
                      size="1.5em"
                      style={{ cursor: "pointer", float: "right" }}
                      onClick={closeModal}
                    />
                  </Dialog.Title>
                  <div className="mt-2 text-gray-900">
                    <List horizontal={false} childrenList={categoryList} />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
