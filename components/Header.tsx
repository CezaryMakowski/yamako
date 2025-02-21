"use client";

import Image from "next/image";
import styles from "./Header.module.css";
import Nav from "./utils/Nav";
import { useEffect, useState } from "react";
import shape from "@/public/styling_shape_white.svg";

export default function Header() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    function clickHandler() {
      setActive(false);
    }

    window.addEventListener("click", clickHandler);

    return () => window.removeEventListener("click", clickHandler);
  }, []);

  useEffect(() => {
    const body = document.querySelector("body");
    if (body && active) {
      body.style.right = "50%";
    }

    if (body && !active) {
      body.style.right = "0";
    }
  }, [active]);

  return (
    <>
      <header className={styles.header}>
        <Nav className={styles.nav} />
        <Image
          className={styles.soundImg}
          src="sound_header.svg"
          alt="fala dźwiękowa nagłówek"
          width={1441}
          height={134}
        />
        <div
          className={
            active ? `${styles.mobileIcon} ${styles.active}` : styles.mobileIcon
          }
          onClick={(e) => {
            setActive(!active);
            e.stopPropagation();
          }}
        >
          <div></div>
        </div>
        <div
          className={
            active ? `${styles.mobileNav} ${styles.active}` : styles.mobileNav
          }
          onClick={(e) => e.stopPropagation()}
        >
          <div className={styles.mobileLinksContainer}>
            <Image src={shape} alt="styling_element" className={styles.shape} />
            <Nav closeFnc={() => setActive(false)} />
          </div>
        </div>
      </header>
    </>
  );
}
