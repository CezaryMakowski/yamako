"use client";
import { motion } from "motion/react";

export default function ScaleIn({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ margin: "-200px 0px -300px 0px", once: true }}
      style={{
        width: "100%",
        height: "100%",
        zIndex: "5",
        position: "relative",
      }}
    >
      {children}
    </motion.div>
  );
}
