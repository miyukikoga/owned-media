"use client";

import React, { useState } from "react";
import { BsHandThumbsUpFill, BsHandThumbsUp } from "react-icons/bs";
import { format } from "date-fns";
import { AppLink } from "../../atoms/AppLink";
import { AppImage } from "../../atoms/AppImage";
import { Text } from "../../atoms/Text";
import { Time } from "../../atoms/Time";
import { Article } from "../../../types/articles";
import styles from "./ArticleCard.module.css";

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
        <AppLink href={"/article/" + article.id}>
          <div className={styles.image}>
            <AppImage alt="article" src={article.eyeCatch} />
          </div>
        </AppLink>
        <div className={styles.content}>
          <h2>
            <AppLink href={"/article/" + article.id}>
              <Text size="large">{article.title}</Text>
            </AppLink>
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
