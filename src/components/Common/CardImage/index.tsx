"use client";

import React from "react";
import styles from "./CardImage.module.scss";
import cn from "classnames";
import Image from "next/image";
import useThemeColor from "@/hooks/useThemeColor";
import { PiArrowUpRightLight } from "react-icons/pi";

type ICard = {
  img: {
    url: {
      src: string;
    };
  };
  title: string;
  description: string;
  cta: {
    url: string;
    text: string;
  };
};

export const CardImage = ({
  img,
  title,
  description,
  cta,
}: ICard) => {

  return (
    <a
      className={cn(styles.CardEl, cta.url ? "" : styles.noLink)}
      href={cta.url}
      target="_blank"
    >
      <div className={styles.innerWrapper}>
        <div className={styles.bgImage}>
          <Image 
            src={img.url.src} 
            width={800} 
            height={800} 
            alt={"alt image"}
            priority
            // placeholder="blur"
          />
        </div>
        <div
          className={styles.content}
          style={
            {
              "--underline-color":
                useThemeColor() === "dark" ? "lightgrey" : "darkgrey",
            } as React.CSSProperties
          }
        >
          <div className={styles.titleWrapper}>
            <h3>{title}</h3>
            {cta.url && <PiArrowUpRightLight />}
          </div>

          <div
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          />
        </div>
      </div>
    </a>
  );
};

export default CardImage;
