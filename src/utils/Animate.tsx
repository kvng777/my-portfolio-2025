import { motion } from "motion/react";
import React from "react";

export function animate(children: React.ReactNode) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
    >
      {children}
    </motion.div>
  );
}
