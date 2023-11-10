"use client";

import React, { useState } from "react";
import { BsHandThumbsUpFill, BsHandThumbsUp } from "react-icons/bs";
import { format } from "date-fns";
import { AppLink } from "../../atoms/AppLink";
import { AppImage } from "../../atoms/AppImage";
import { Text } from "../../atoms/Text";
import { Time } from "../../atoms/Time";
import { Article } from "../../../types/articles";

type Props = {
  article: Article;
};

export const ArticleCard = ({ article }: Props): JSX.Element => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const formattedDate = formatArticleCreatedAt(new Date(article.createdAt));

  return (
    <article>
      <div className="grid grid-cols-3 border-t">
        <AppLink href={`/articles/${article.id}`}>
          <div className="col-span-1 flex justify-center items-center m-5">
            <AppImage alt="article" src={article.eyeCatch} />
          </div>
        </AppLink>
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
                <Text size="small">{article.category}</Text>
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
                  color="#1ea7fd"
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
    </article>
  );
};

/**
 * 作成日をフォーマットする
 * @param date 日付
 * @returns フォーマットされた日付
 */
export const formatArticleCreatedAt = (date: Date): string => {
  return format(date, "yyyy-MM-dd");
};
