"use client";

import React, { useState } from "react";
import { BsHandThumbsUpFill, BsHandThumbsUp } from "react-icons/bs";
import { AppLink } from "@/app/components/elements/AppLink";
import { AppImage } from "@/app/components/elements/AppImage";
import { Text } from "@/app/components/elements/Text";
import { Time } from "@/app/components/elements/Time";
import { Article } from "@/features/articles/types/articleTypes";
import { formatArticleCreatedAt } from "@/features/articles/functions/article";

type Props = {
  article: Article;
};

export const ArticleCard = ({ article }: Props) => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const formattedDate = formatArticleCreatedAt(new Date(article.createdAt));

  return (
    <article>
      <div className="grid grid-cols-3">
        <div className="col-span-1 flex justify-center items-center m-5">
          <AppLink href={`/articles/${article.id}`}>
            <AppImage alt="article" src={article.eyeCatch} />
          </AppLink>
        </div>
        <div className="col-span-2 m-5">
          <h1>
            <AppLink href={`/articles/${article.id}`}>
              <Text size="large">{article.title}</Text>
            </AppLink>
          </h1>
          <div className="truncate m-2">
            <Text>{article.content}</Text>
          </div>
          <div className="grid grid-cols-3">
            <div className="col-span-2 m-2">
              <div className="mt-2">
                <Text size="small">{article.category.name}</Text>
              </div>
              <span className="mt-2">
                <Time size="small" dateTime={article.createdAt}>
                  {formattedDate}
                </Time>
              </span>
            </div>
            <span
              className="col-span-1 flex justify-end items-center mr-2"
              onClick={handleClick}
            >
              {click ? (
                <BsHandThumbsUpFill
                  color="#06B6D4"
                  size="1.5em"
                  title="BsHandThumbsUpFill"
                  className="cursor-pointer"
                />
              ) : (
                <BsHandThumbsUp
                  size="1.5em"
                  title="BsHandThumbsUp"
                  className="cursor-pointer"
                />
              )}
            </span>
          </div>
        </div>
      </div>
      <hr className="border-gray-500 border-1 my-3" />
    </article>
  );
};
