import Image from "next/image";
import styles from "./AboutMe.module.css";
import jacek from "@/public/yamako_jacek_makowski_2.png";
import meditation from "@/public/yamako_meditation.svg";

export default function AboutMe() {
  return (
    <section className={styles.section} id="o-mnie">
      <div className={styles.titleContainer}>
        <div className={styles.shape}></div>
        <Image src={jacek} alt="Jacek Makowski" className={styles.jacek} />
        <h2>Nazywam się Jacek Makowski</h2>
        <Image src={meditation} alt="medytacja" className={styles.meditation} />
      </div>
      <p className={styles.text}>
        Od dawna zajmuje mnie przygoda z wibracjami, oraz szeroko pojętym
        dźwiękiem. Jestem osobą czującą i intuicyjną. Interesuje mnie człowiek
        jako istota energetyczna. Jego równowaga w fizyczny ciele, oraz wszelkie
        sposoby prowadzące do jego pełni zdrowia i szczęścia. Terapie dźwiękiem
        są mi bardzo bliskie. Odczuwam materię w której się manifestują na
        poziomie materialnym, wibracyjnym oraz duchowym.
      </p>
    </section>
  );
}
