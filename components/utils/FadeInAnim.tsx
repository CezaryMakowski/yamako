"use client";
import { motion } from "motion/react";

export default function FadeIn({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ margin: "-150px 0px -150px 0px", once: true }}
      style={{ width: "100%" }}
    >
      {children}
    </motion.div>
  );
}
