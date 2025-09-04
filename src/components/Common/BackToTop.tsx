"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { VscChevronUp } from "react-icons/vsc";

const SCROLL_THRESHOLD = 0.3; // 30%

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? scrollY / docHeight : 0;
      setShow(scrolled > SCROLL_THRESHOLD);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          key="backtotop"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.4 }}
          onClick={handleClick}
          style={{
            position: "fixed",
            right: 24,
            bottom: 32,
            zIndex: 1000,
            width: 50,
            height: 50,
            // padding: "1.5em",
            borderRadius: 999,
            background: "#222",
            color: "#fff",
            border: "none",
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            cursor: "pointer",
            fontWeight: 600,
            fontSize: 18,
            opacity: 0.9,
          }}
          aria-label="Back to top"
        >
          <VscChevronUp style={{ fontSize: '28px'}}/>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
