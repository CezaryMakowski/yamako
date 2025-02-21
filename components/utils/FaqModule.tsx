"use client";

import Image from "next/image";
import styles from "./FaqModule.module.css";
import arrow from "@/public/FAQ_arrow.svg";
import { useRef, useState } from "react";

export default function FaqModule({
  question,
  children,
}: {
  question: string;
  children: React.ReactNode;
}) {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);
  function clickHandler() {
    setExpanded(!expanded);
    if (!ref.current) return;
    if (expanded) {
      console.log(expanded);
      ref.current.style.maxHeight = "0px";
    } else {
      ref.current.style.maxHeight = ref.current.scrollHeight + "px";
    }
  }

  return (
    <div className={styles.faq}>
      <h2 className={styles.question} onClick={() => clickHandler()}>
        {question}
        <Image
          className={expanded ? styles.rotate : undefined}
          src={arrow}
          alt="arrow"
        />
      </h2>
      <div ref={ref} className={styles.answerContainer}>
        {children}
      </div>
    </div>
  );
}
