"use client";
import { motion } from "motion/react";

export default function FadeIn({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ margin: "-200px 0px -300px 0px", once: true }}
      style={{ width: "100%" }}
    >
      {children}
    </motion.div>
  );
}
