import Image from "next/image";
import styles from "./Pricing.module.css";
import soundWave from "@/public/yamako_circular_soundwave.svg";

export default function Pricing() {
  return (
    <section className={styles.section}>
      <span className="anchor" id="cennik"></span>
      <div className={styles.pricing}>
        <Image src={soundWave} alt="sound wave" className={styles.soundWave} />
        <h2>Cennik</h2>
        <p>Koszt inwestycji to 150 PLN za 60 minutowe spotkanie.</p>
      </div>
    </section>
  );
}
