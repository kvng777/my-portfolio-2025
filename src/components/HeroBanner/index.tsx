"use client";

import React from "react";
import styles from "./HeroBanner.module.scss";
import cn from "classnames";
import Image from "next/image";
import ProfilePic from "../../../public/image/picture.jpg";
import DarkMode from "@/components/DarkMode";
import { RiComputerLine } from "react-icons/ri";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineLanguage } from "react-icons/md";
import "flag-icons/css/flag-icons.min.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
import ShinyText from "../Animations/ShinyText/ShinyText";
import { MdOutlineSimCardDownload } from "react-icons/md";
import { useTranslations } from 'next-intl';
import LangSwitcher from "../LangSwitcher";

export const HeroBanner = () => {
  const t = useTranslations('HeroBanner');

  return (
    <div className={cn(styles.el, "padding-outter")}>
      <div className={cn(styles.container, "padding-inner", "inner")}>
        <div className={styles.imageWrapper}>
          <div className={styles.imageTextWrapper}>
            <Image
              className={styles.picture}
              src={ProfilePic}
              width={200}
              height={200}
              placeholder="blur"
              alt="Profile picture"
              priority
            />
            <div
              data-tooltip-id="flag"
              data-tooltip-content={"Philippines"}
              data-tooltip-place="top"
            >
              <span className={cn(styles.flag, "fi fi-ph")} />
            </div>
          </div>
        </div>

        <div className={styles.settings}>
          <div className={styles.langSwitcher}>
            <LangSwitcher />
          </div>
          
          <div className={styles.darkMode}>
            <DarkMode/>
          </div>
        </div>

        <div className={styles.info}>
          <div className={styles.titleWrapper}>
            <div className={styles.nameFlagWrapper}>
              <h1>{t('name')}</h1>
              <div className={styles.pulseWrapper}>
                <span className={styles.pulse} />
                <ShinyText
                  text="OPEN TO WORK"
                  disabled={false}
                  speed={3}
                  className={styles.shiny}
                />
              </div>
            </div>
            <ReactTooltip id="flag" />
          </div>

          <ul className={styles.infoTag}>
            <li>
              <RiComputerLine /> {t('role')}
            </li>
            <li>
              <IoLocationOutline /> {t('location')}
            </li>
            <li>
              <MdOutlineLanguage /> {t('language')}
            </li>
          </ul>

          <a
            className={styles.resume}
            href="/resume.pdf"
            target="_blank"
          >
            <MdOutlineSimCardDownload />
            {t('resume')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
