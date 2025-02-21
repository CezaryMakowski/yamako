import Image from "next/image";
import styles from "./AboutSession.module.css";
import lotos from "@/public/yamako_lotos.svg";
import soundWave from "@/public/yamako_soundwave.svg";
import shape from "@/public/styling_shape_white.svg";
import Link from "next/link";
import FadeIn from "./utils/FadeInAnim";

export default function AboutSession() {
  return (
    <section className={styles.section}>
      <div className={styles.borderTop}></div>
      <div className={styles.visualsContainer}>
        <div className={`${styles.bottomShape} ${styles.left}`}></div>
        <div className={styles.bottomShape}></div>
        <Image src={soundWave} alt="soundWave" className={styles.soundWave} />
        <Image src={lotos} alt="lotos" className={styles.lotos} />
      </div>
      <FadeIn>
        <Image src={shape} alt="shape" className={styles.shape} />
        <div className={styles.textContainer}>
          <h2 className={styles.title1}>Witajcie Dobrzy Ludzie</h2>
          <p>
            Mistrzowie, którzy leczyli ich wibracjami od tysięcy lat, podzielili
            się tą wiedzą, bo są świadomi doniosłości naszych czasów. Teraz nie
            trzeba już jechać na drugi koniec świata. Można zaznać uwolnienia ze
            stanów bólowych, chorobowych, oraz głębokiego relaksu na poziomie
            komórkowym tutaj - na miejscu, udając się w indywidualną podróż na
            falach subtelnych brzmień.
          </p>
          <p>
            Działanie mis poprawia naszą koncentrację, a napięcia i blokady
            emocjonalne zostają rozpuszczone. Może załagodzić to ból psychiczny
            lub emocjonalny (niską samoocenę, zmartwienia, strach, złość,
            niepokój, depresję, bezsenność).
          </p>
          <p>
            Badania wykazały, że śpiewające misy mogą wywoływać fizjologiczne
            psychologiczne reakcje, zmniejszając negatywne oddziaływania i
            zwiększając pozytywne, a także poprawiając ciśnienie krwi, tętno i
            częstość oddechów.
          </p>
          <p>
            Ich działanie pomaga wzmocnić układ odpornościowy i poprawia ogólne
            samopoczucie. Udowodniono również, ze pomagają one zrównoważyć
            czakry - siedem głównych ośrodków energetycznych w ciele, oraz
            poprawić przepływ energii przez meridiany (wiedza o czakrach i
            meridianach jest znana od tysiący lat i jest dostępna w
            podręcznikach Tradycyjnej Medycyny Chińskiej).
          </p>
          <p>
            Sesja polega na osiągnięciu subtelnego, zrelaksowanego stanu umysłu
            i zawieszeniu ciała na wibracjach. Mocnym, prozdrowotnym jej efektem
            jest eliminacja toksyn. (Należy pamiętać, by po powrocie do domu
            dobrze nawodnić organizm, co pozwoli ujść toksynom z tkanek). Dzieje
            się tak dlatego, że poprzez takie oddziaływanie dokonuje się swoista
            fizjoterapia komórek.
          </p>
          <div className={styles.linksContainer}>
            <Link href={"#"}>Jak przebiega sesja?</Link>
            <Link href={"#"}>Cennik</Link>
            <Link href={"#"}>Umów się na sesję</Link>
          </div>
          <h2 className={styles.title2}>Korzyści zdrowotne śpiewających mis</h2>
          <div className={styles.listContainer}>
            <ul>
              <li>Zmniejsza się poziom stresu</li>
              <li>Następuje ulga od niepokoju</li>
              <li>Polepsza się jakość snu</li>
              <li>Uwalniają się blokady emocjonalne</li>
              <li>Polepsza się nastrój</li>
            </ul>
            <ul>
              <li>Poprawia się skupienie</li>
              <li>Wzmaga się jasność umysłu</li>
              <li>Pojawia się kreatywne natchnienie</li>
              <li>Następuje wewnątrzkomórkowa odnowa fizyczna</li>
              <li>Zaznajemy doświadczenia głębokiego spokoju</li>
            </ul>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
