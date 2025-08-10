"use client";

import React, { useState } from "react";
import styles from "./Contact.module.scss";
import cn from "classnames";
import LeftText from "../Common/LeftText";
import { IoLogoWechat } from "react-icons/io5";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { MdAlternateEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";

// import { MdOutlineSimCardDownload } from "react-icons/md";

export const Contact = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      // alert("URL copied to clipboard");
      // toast('WeChat ID: kvngamboa is copied!')
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const handleWechatClick = () => {
    copyToClipboard("kvngamboa");
    setIsPopoverOpen(!isPopoverOpen);
    setIsCopied(true);
  };

  return (
    <div className={cn(styles.el, "padding-outter")}>
      <div className={cn(styles.container, "padding-inner", "inner")}>
        <LeftText text="Contact" />

        <div className={styles.right}>
          <ul>
            <li>
              <button onClick={handleWechatClick}>
                <IoLogoWechat />
                <div className={styles.textWrapper}>
                  <span
                    className={cn(styles.wechatId, isCopied ? styles.hide : "")}
                  >
                    kvngamboa
                  </span>
                  <span
                    className={cn(
                      styles.labelCopied,
                      isCopied ? styles.show : ""
                    )}
                  >
                    Copied!
                  </span>
                </div>
              </button>
            </li>
            <li>
              <HiOutlineDevicePhoneMobile />
              <a href="tel:+8613788949464">+86 13788949464</a>
            </li>
            <li>
              <MdAlternateEmail />
              <a href="mailto:kjangamba@gmail.com" target="_blank">
                kjangamboa@gmail.com
              </a>
            </li>
            <li>
              <FaLinkedinIn />
              <a
                href="https://www.linkedin.com/in/kvngamboa/"
                target="_blank"
              >
                /kvngamboa
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
