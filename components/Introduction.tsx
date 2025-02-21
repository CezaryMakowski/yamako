import Image from "next/image";
import styles from "./Intruduction.module.css";
import brushStroke from "@/public/yamako_brush_strokes.png";
import bowls from "@/public/yamako_misy.png";

export default function Introduction() {
  return (
    <section className={styles.section}>
      <div>
        <h1 className={styles.title}>Yamako Terapie Dźwiękiem</h1>
        <Image
          src={brushStroke}
          alt="pociągnięcia pędzlem"
          className={styles.brushStroke}
        />
        <p className={styles.text}>
          W zgodzie z wypracowaną przez setki lat przez mistrzów z rejonu
          Himalajów metodą balansowania zdrowia na poziomie energetycznym i
          cielesnym zabieram tych, którzy zapukają do mnie w podróż dźwiękiem
          mis...
        </p>
      </div>
      <Image src={bowls} alt="misy" className={styles.bowls} />
    </section>
  );
}
