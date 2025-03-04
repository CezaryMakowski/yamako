import Image from "next/image";
import styles from "./Contact.module.css";
import ContactForm from "./ContactForm";
import Link from "next/link";
import tel from "@/public/yamako_telephone.svg";
import mail from "@/public/yamako_mail.svg";
import pin from "@/public/yamako_pin.svg";
import facebook from "@/public/yamako_facebook.svg";
import FadeIn from "./utils/FadeInAnim";
import ScaleIn from "./utils/ScaleInAnim";

export default function Contact() {
  return (
    <section className={styles.section} id="kontakt">
      <FadeIn>
        <h2 className={styles.title}>Zapraszam do Kontaktu</h2>
        <ContactForm />
      </FadeIn>
      <FadeIn>
        <div className={styles.contactContainer}>
          <div className={styles.contact}>
            <Image src={tel} alt="telephone" />
            <Link href={"tel:+48515531720"}>+48 515 531 720</Link>
          </div>
          <div className={styles.contact}>
            <Image src={mail} alt="mail" />
            <Link href={"mailto:yamakoterapie@gmail.com"}>
              yamakoterapie@gmail.com
            </Link>
          </div>
        </div>
      </FadeIn>
      <ScaleIn>
        <Link href={"https://www.facebook.com/profile.php?id=61558710039370"}>
          <Image src={facebook} alt="facebook" className={styles.facebook} />
        </Link>
      </ScaleIn>
      <FadeIn>
        <div className={styles.localization} id="gdzie">
          <h2>Gdzie odbywają się sesje?</h2>
          <div className={styles.contact}>
            <Image src={pin} alt="pin" className={styles.pin} />
            <p>
              Sosnowa 6A, 71-468 Szczecin <br />
              (wejście od strony parkingu na Rapackiego)
            </p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
