import Image from "next/image";
import styles from "./page.module.css";
import shape from "@/public/styling_shape_white.svg";

export default function Page() {
  return (
    <main className={styles.section} id="przebieg-sesji">
      <div className={styles.titleContainer}>
        <h1>Polityka Prywatności</h1>
      </div>
      <div className={styles.textContainer}>
        <ol>
          <li>
            <h2>Informacje ogólne</h2>
            <p>
              Niniejsza Polityka Prywatności określa zasady przetwarzania i
              ochrony danych osobowych użytkowników korzystających ze strony
              internetowej yamakoterapie.pl, prowadzonej przez Jacka
              Makowskiego, z siedzibą w Szczecinie.
            </p>
          </li>
          <li>
            <h2>Administrator danych</h2>
            <p>
              Administratorem danych osobowych jest Jacek Makowski, prowadzący
              działalność gospodarczą pod nazwą Yamako - terapie dźwiękiem.
            </p>
          </li>
          <li>
            <h2>Zakres zbieranych danych</h2>
            <p>
              Podczas korzystania ze strony mogą być zbierane następujące dane:
            </p>
            <ul>
              <li>Adres IP użytkownika</li>
              <li>Typ przeglądarki</li>
              <li>Informacje o systemie operacyjnym</li>
              <li>Dane demograficzne i zainteresowania (jeśli dostępne)</li>
              <li>
                Informacje o zachowaniu na stronie (np. odwiedzane podstrony,
                czas spędzony na stronie)
              </li>
            </ul>
            <p>
              Dane te są zbierane za pomocą plików cookie i podobnych
              technologii
            </p>
          </li>
          <li>
            <h2>Cele przetwarzania danych</h2>
            <p>Zebrane dane są wykorzystywane w następujących celach:</p>
            <ul>
              <li>
                Analiza statystyczna ruchu na stronie za pomocą Google Analytics
              </li>
              <li>
                Personalizacja treści reklamowych i remarketing za pomocą Google
                Ads
              </li>
              <li>Poprawa funkcjonalności i jakości strony</li>
            </ul>
          </li>
          <li>
            <h2>Wykorzystanie narzędzi Google</h2>
            <h3>Google Analytics</h3>
            <p>
              Strona korzysta z Google Analytics, usługi analizy sieci
              oferowanej przez Google LLC. Google Analytics wykorzystuje pliki
              cookie do analizy sposobu korzystania ze strony przez
              użytkowników. Informacje generowane przez pliki cookie na temat
              korzystania ze strony są przekazywane i przechowywane przez Google
              na serwerach w Stanach Zjednoczonych. W celu ochrony prywatności
              użytkowników, na stronie została włączona funkcja anonimizacji
              adresów IP (maskowanie IP), co oznacza, że adres IP użytkownika
              jest skracany przed przesłaniem do Google.
            </p>
            <h3>Google Ads</h3>
            <p>
              Strona korzysta z Google Ads w celu prowadzenia kampanii
              reklamowych. Google Ads może wykorzystywać pliki cookie do
              personalizacji reklam oraz śledzenia konwersji.
            </p>
          </li>
          <li>
            <h2>Pliki cookie</h2>
            <p>
              Pliki cookie to niewielkie pliki tekstowe przechowywane na
              urządzeniu użytkownika, które umożliwiają analizę korzystania ze
              strony. Użytkownik ma możliwość zarządzania plikami cookie poprzez
              ustawienia swojej przeglądarki internetowej.
            </p>
          </li>
          <li>
            <h2>Podstawa prawna przetwarzania danych</h2>
            <p>
              Podstawą prawną przetwarzania danych osobowych jest zgoda
              użytkownika wyrażona podczas korzystania ze strony, zgodnie z art.
              6 ust. 1 lit. a RODO.
            </p>
          </li>
          <li>
            <h2>Prawa użytkownika</h2>
            <p>Użytkownik ma prawo do:</p>
            <ul>
              <li>Dostępu do swoich danych osobowych</li>
              <li>Sprostowania danych</li>
              <li>Usunięcia danych</li>
              <li>Ograniczenia przetwarzania</li>
              <li>Przenoszenia danych</li>
              <li>Wniesienia sprzeciwu wobec przetwarzania</li>
              <li>Cofnięcia zgody w dowolnym momencie</li>
            </ul>
            <p>
              W celu skorzystania z powyższych praw, prosimy o kontakt pod
              adresem e-mail: cezary.makowski96@gmail.com.
            </p>
          </li>
          <li>
            <h3>Przekazywanie danych do państw trzecich</h3>
            <p>
              Dane mogą być przekazywane do państw trzecich (np. USA) w związku
              z korzystaniem z usług Google. Google LLC posiada certyfikat
              zgodności z programem EU-U.S. Data Privacy Framework, co zapewnia
              odpowiedni poziom ochrony danych osobowych.
            </p>
          </li>
          <li>
            <h3>Zmiany w Polityce Prywatności</h3>
            <p>
              Administrator zastrzega sobie prawo do wprowadzania zmian w
              niniejszej Polityce Prywatności. Wszelkie zmiany będą publikowane
              na tej stronie.
            </p>
          </li>
        </ol>
        <Image src={shape} alt="styling_element" className={styles.shape} />
      </div>
    </main>
  );
}
