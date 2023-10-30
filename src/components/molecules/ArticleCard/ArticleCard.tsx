"use client";

import React, { useState } from "react";
import { BsHandThumbsUpFill, BsHandThumbsUp } from "react-icons/bs";
import { format } from "date-fns";
import { MyLink } from "../../atoms/Link";
import { MyImage } from "../../atoms/Image";
import { Text } from "../../atoms/Text";
import { Time } from "../../atoms/Time";
import { Article } from "../../../types/articles";
import styles from "./articleCard.module.css";

type ArticleCardProps = {
  article: Article;
};

export const ArticleCard = ({ article }: ArticleCardProps) => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const formattedDate = formatArticleCreatedAt(new Date(article.createdAt));

  return (
    <article>
      <div className={styles.articleCard}>
        <MyLink href={"/article/" + article.id}>
          <div className={styles.image}>
            <MyImage alt="article" src={article.eyeCatch} />
          </div>
        </MyLink>
        <div className={styles.content}>
          <h2>
            <MyLink href={"/article/" + article.id}>
              <Text size="large">{article.title}</Text>
            </MyLink>
          </h2>
          <div className={styles.overflow}>
            <Text>{article.content}</Text>
          </div>
          <div className={styles.footer}>
            <div>
              <div className={styles.category}>
                <Text size="small">{article.category}</Text>
              </div>
              <span className={styles.time}>
                <Time size="small" dateTime={new Date(article.createdAt)}>
                  {formattedDate}
                </Time>
              </span>
            </div>
            <span className={styles.good} onClick={handleClick}>
              {click ? (
                <BsHandThumbsUpFill color="#1ea7fd" size="1.5em" />
              ) : (
                <BsHandThumbsUp size="1.5em" />
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
const formatArticleCreatedAt = (date: Date): string => {
  return format(date, "yyyy-MM-dd");
};
