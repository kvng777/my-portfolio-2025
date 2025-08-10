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

export const HeroBanner = () => {
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

        <div className={styles.darkModeToggler}>
          <DarkMode />
        </div>

        <div className={styles.info}>
          <div className={styles.titleWrapper}>
            <div className={styles.nameFlagWrapper}>
              <h1>Kevin Gamboa</h1>
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
              <RiComputerLine /> Front-end Web Developer
            </li>
            <li>
              <IoLocationOutline /> Shanghai, China
            </li>
            <li>
              <MdOutlineLanguage /> English, Chinese, Tagalog
            </li>
            {/* <li>
              <MdOutlineSimCardDownload />
              <a
                href="/resume.pdf"
                target="_blank"
              >
                Resume
              </a>
            </li> */}
          </ul>

          {/* <div className={styles.resume}> */}
            
            <a
              className={styles.resume}
              href="/resume.pdf"
              target="_blank"
            >
              <MdOutlineSimCardDownload />
              Resume
            </a>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
