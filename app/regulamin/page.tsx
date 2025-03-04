import Image from "next/image";
import styles from "./page.module.css";
import shape from "@/public/styling_shape_white.svg";

export default function Page() {
  return (
    <main className={styles.section} id="przebieg-sesji">
      <div className={styles.titleContainer}>
        <h1>Regulamin Współpracy</h1>
      </div>
      <div className={styles.textContainer}>
        <ol>
          <li>
            <h2>Postanowienia ogólne</h2>
            <ol>
              <li>
                Regulamin określa zasady współpracy oraz korzystania z usług
                terapii dźwiękiem z wykorzystaniem mis tybetańskich i
                kamertonów.
              </li>
              <li>
                Terapia ma charakter wspierający i relaksacyjny. Nie zastępuje
                leczenia medycznego ani terapii psychologicznej.
              </li>
              <li>
                Klient, korzystając z usług, akceptuje postanowienia niniejszego
                regulaminu.
              </li>
            </ol>
          </li>
          <li>
            <h2>Zakres usług</h2>
            <ol>
              <li>
                Sesje terapeutyczne obejmują pracę z dźwiękiem mis tybetańskich
                i kamertonów w celu harmonizacji ciała i umysłu.
              </li>
              <li>
                Terapia może być przeprowadzana indywidualnie lub w drodze
                wyjątku w obecności osoby drugiej, zgodnie z wcześniejszym
                ustaleniem.
              </li>
              <li>
                Każda sesja dostosowywana jest do indywidualnych potrzeb
                klienta.
              </li>
            </ol>
          </li>
          <li>
            <h2>Warunki uczestnictwa</h2>
            <ol>
              <li>
                Terapia jest dostępna dla osób pełnoletnich. Osoby
                niepełnoletnie mogą w niej uczestniczyć wyłącznie pod opieką
                opiekuna prawnego.
              </li>
              <li>
                Przeciwwskazaniami do terapii są m.in.: gdy ktoś ma czynną
                infekcję, rozrusznik serca, stenty wieńcowe, epilepsję, sztuczne
                zastawki serca, wszczepialny kardiowerterdefibrylator (ICD),
                choroby psychiczne w ostrym stadium. Klient zobowiązany jest
                poinformować o ewentualnych przeciwwskazaniach przed sesją.
              </li>
              <li>
                {" "}
                Klient ponosi odpowiedzialność za zatajenie informacji
                dotyczących swojego stanu zdrowia.
              </li>
            </ol>
          </li>
          <li>
            <h2>Rezerwacja i odwoływanie wizyt</h2>
            <ol>
              <li>
                Rezerwacji sesji można dokonać telefonicznie, mailowo lub
                poprzez inne ustalone kanały komunikacji.
              </li>
              <li>
                Odwołanie sesji jest możliwe najpóźniej na 24 godziny przed
                umówionym terminem. W przypadku późniejszego odwołania lub
                nieobecności, klient zobowiązany jest do pokrycia pełnego kosztu
                sesji. Wyjątkiem są uzasadnione sytuacje losowe, których nie
                można przewidzieć wcześniej.
              </li>
              <li>
                Prowadzący zastrzega sobie prawo do odwołania lub zmiany terminu
                sesji z ważnych powodów, informując o tym klienta w możliwie
                najkrótszym czasie.
              </li>
            </ol>
          </li>
          <li>
            <h2>Płatności</h2>
            <ol>
              <li>
                Cennik usług podawany jest do wiadomości klienta przed
                umówieniem sesji.
              </li>
              <li>
                {`Płatność za sesję odbywa się gotówką, lub blik'iem na telefon.`}
              </li>
              <li>
                Brak uregulowania płatności może skutkować odmową świadczenia
                kolejnych usług.
              </li>
            </ol>
          </li>
          <li>
            <h2>Odpowiedzialność i bezpieczeństwo</h2>
            <ol>
              <li>
                Prowadzący terapię nie ponosi odpowiedzialności za ewentualne
                negatywne skutki terapii wynikające z zatajenia przeciwwskazań
                przez klienta.
              </li>
              <li>
                Sesje odbywają się w spokojnym, komfortowym otoczeniu, z
                poszanowaniem prywatności i potrzeb klienta.
              </li>
            </ol>
          </li>
          <li>
            <h2>Ochrona danych osobowych</h2>
            <ol>
              <li>
                Dane osobowe klientów są przetwarzane zgodnie z obowiązującymi
                przepisami o ochronie danych osobowych i wykorzystywane
                wyłącznie w celu realizacji usług.
              </li>
            </ol>
          </li>
          <li>
            <h2>Postanowienia końcowe</h2>
            <ol>
              <li>
                Regulamin może ulec zmianie, a aktualna wersja jest zawsze
                dostępna u prowadzącego terapię, lub na jego stronie
                internetowej.
              </li>
              <li>
                Wszelkie kwestie sporne rozwiązywane są w drodze rozmowy lub w
                oparciu o obowiązujące przepisy prawa.
              </li>
            </ol>
          </li>
        </ol>
        <Image src={shape} alt="styling_element" className={styles.shape} />
      </div>
    </main>
  );
}
