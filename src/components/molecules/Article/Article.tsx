"use client";

import React, { useState } from "react";
import { BsHandThumbsUpFill, BsHandThumbsUp } from "react-icons/bs";
import { MyLink } from "../../atoms/Link";
import { MyImage } from "../../atoms/Image";
import { Text } from "../../atoms/Text";
import { Time } from "../../atoms/Time";
import { ArticleType } from "../../../types/articles";
import styles from "./article.module.scss";

type ArticleProps = {
  article: ArticleType;
};

export const Article = ({ article }: ArticleProps) => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const formattedDate = formateToYyyymmdd(article.createdAt);

  return (
    <article>
      <div className={styles.article}>
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
                <Time size="small" dateTime={article.createdAt}>
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

const formateToYyyymmdd = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};
