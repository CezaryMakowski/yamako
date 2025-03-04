import Image from "next/image";
import styles from "./AboutSession.module.css";
import lotos from "@/public/yamako_lotos.svg";
import soundWave from "@/public/yamako_soundwave.svg";
import shape from "@/public/styling_shape_white.svg";
import Link from "next/link";
import FadeIn from "./utils/FadeInAnim";
import ScaleIn from "./utils/ScaleInAnim";

export default function AboutSession() {
  return (
    <section className={styles.section}>
      <div className={styles.visualsContainer}>
        <div className={`${styles.bottomShape} ${styles.left}`}></div>
        <div className={styles.bottomShape}></div>
        <ScaleIn>
          <Image src={soundWave} alt="soundWave" className={styles.soundWave} />
          <Image src={lotos} alt="lotos" className={styles.lotos} />
        </ScaleIn>
      </div>
      <FadeIn>
        <Image src={shape} alt="shape" className={styles.shape} />
        <div className={styles.textContainer}>
          <p>
            Mistrzowie, którzy leczyli ich wibracjami od tysięcy lat, podzielili
            się tą wiedzą, bo są świadomi doniosłości naszych czasów. Teraz nie
            trzeba już jechać na drugi koniec świata. Można zaznać uwolnienia ze
            stanów bólowych, chorobowych, oraz głębokiego relaksu na poziomie
            komórkowym tutaj - na miejscu, udając się w indywidualną podróż na
            falach subtelnych brzmień.
          </p>
          <h2>misy</h2>
          <p>
            Działanie mis poprawia naszą koncentrację, a napięcia i blokady
            emocjonalne zostają rozpuszczone. Może załagodzić to ból psychiczny
            lub emocjonalny (niską samoocenę, zmartwienia, strach, złość,
            niepokój, depresję, bezsenność).
          </p>
          <p>
            Badania wykazały, że śpiewające misy mogą wywoływać
            fizjologiczno-psychologiczne reakcje, zmniejszając negatywne
            oddziaływania i zwiększając pozytywne, a także poprawić ciśnienie
            krwi, tętno i częstość oddechów.
          </p>
          <p>
            Ich działanie pomaga wzmocnić układ odpornościowy i poprawia ogólne
            samopoczucie. Udowodniono również, ze pomagają one zrównoważyć
            czakry - siedem głównych ośrodków energetycznych w ciele, oraz
            poprawić przepływ energii przez meridiany (wiedza o czakrach i
            meridianach jest znana od tysiący lat i jest dostępna w
            podręcznikach Tradycyjnej Medycyny Chińskiej).
          </p>
          <h2>kamertony</h2>
          <p>
            Kamertony stanowią medium z którego równierz korzystam. Jeżeli ktoś
            ma trudności z wyciszeniem umysłu, jeżeli myślami nie potrafi odciąć
            się od codziennej gonitwy dnia - wtedy pomaga mi określony ich
            zestaw, który oddziaływuje na fale mózgowe. Za pomocą odpowiedniej
            pary kamertonów, można pomóc osiągnąć komuś określony stan umysłu,
            który przekłada się na właściwy odbiór sesji śpiewającymi misami.
          </p>
          <p>
            Kamertonami można o wiele więcej. Wraz z indywidualnym podejściem do
            człowieka, można pomóc mu w osiągnięciu balansu ciała i ducha.
            Umieszczając nóżkę kamertonu na punktach akupunkturowych na ciele,
            można wykonywać paletę działań zgodnych z ideą tradycyjnej
            akupunktury, gdzie stosuje się wbijanie w ciało igieł.
          </p>
          <p>
            Kamertony charakteryzują się podobnym działaniem, lecz jest to
            metoda bezinwazyjna i wielu ludzi, którzy mają problem z poddaniem
            się klasycznemu zabiegowi z igłami, może poddać się działaniu
            kamertonów, gdyż jest to technika charakteryzująca się dużą
            skutecznością.
          </p>
          <div className={styles.linksContainer}>
            <Link href={"/#przebieg-sesji"}>Jak przebiega sesja?</Link>
            <Link href={"/#cennik"}>Cennik</Link>
            <Link href={"/#kontakt"}>Umów się na sesję</Link>
          </div>
          <h2 className={styles.title2}>Korzyści zdrowotne</h2>
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
