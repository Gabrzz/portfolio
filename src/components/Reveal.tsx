"use strict";
"use client";

import { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface RevealProps {
  children: ReactNode;
  width?: "w-full" | "w-fit";
  duration?: number;
  delay?: number;
  yOffset?: number;
  xOffset?: number;
  blur?: boolean;
}

export default function Reveal({
  children,
  width = "w-full",
  duration = 0.6,
  delay = 0.1,
  yOffset = 30,
  xOffset = 0,
  blur = true,
}: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });

  const variants = {
    hidden: {
      opacity: 0,
      y: yOffset,
      x: xOffset,
      filter: blur ? "blur(8px)" : "blur(0px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: duration,
        delay: delay,
        ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier for high-end Apple-like ease-out
      },
    },
  };

  return (
    <div ref={ref} className={`${width} relative`}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {children}
      </motion.div>
    </div>
  );
}
