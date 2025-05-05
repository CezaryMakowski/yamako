import Image from "next/image";
import styles from "./Footer.module.css";
import Nav from "./utils/Nav";
import shape from "@/public/styling_shape_white.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Image src={shape} alt="styling_element" className={styles.shape} />
      <div className={styles.whiteBlock}></div>
      <Nav className={styles.nav} />
      <div className={styles.terms}>
        <Link href={"/regulamin"}>Regulamin Współpracy</Link>
        <Link href={"/polityka-prywatnosci"}>polityka prywatności</Link>
      </div>
      <div className={styles.designBy}>
        <p>Designed by</p>
        <Link target="_blank" href={"https://designandweb.dev"}>
          Cezary
        </Link>
      </div>
    </footer>
  );
}
