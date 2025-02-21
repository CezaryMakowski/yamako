import Image from "next/image";
import styles from "./Footer.module.css";
import Nav from "./utils/Nav";
import shape from "@/public/styling_shape_white.svg";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Image src={shape} alt="styling_element" className={styles.shape} />
      <div className={styles.whiteBlock}></div>
      <Nav className={styles.nav} />
    </footer>
  );
}
