import Image from "next/image";
import styles from "./HowItsDone.module.css";
import shape from "@/public/styling_shape_white.svg";

export default function HowItsDone() {
  return (
    <section className={styles.section} id="przebieg-sesji">
      <div className={styles.titleContainer}>
        <h2>Jak przebiega sesja?</h2>
      </div>
      <div className={styles.textContainer}>
        <p>
          Sesja jest wykonywana w pozycji leżącej. Całe ciało jest rozluźnione.
          Dobrze jest delikatnie, ale świadomie wycofać się z natłoku myśli
          dotyczących nurtujących nas spraw. Można skupić swoją uważność na
          oddechu. Dookoła rozstawione są misy, które są przyporządkowane
          poszczególnym czakrom. Równoważące działanie dźwięku pomaga zredukować
          stres, depresje, bezsenność, nadciśnienie. Ważne jest zapewnienie
          komfortu i bezpieczeństwa. Okrywające ciało miłe kocyki utrzymują
          ciepło.
        </p>
        <p>
          Prowadzący sesję działa w przestrzeni wymagającej uwagi "tu i teraz".
          W chwili jej trwania, intuicyjnie dobiera elementy, które są ściśle
          dopasowane do indywidualnego stanu i charakteru danej osoby.
        </p>
        <p>
          Nasze ciało składa się w siedemdziesięciu procentach z wody, a woda ma
          swą pamięć. W związku z tym każda komórka także ją posiada. Wszelkie
          przeszłe traumy osadzają się w nim i ono je pamięta. Poprzez wibracje
          mis może zostać uwolnione to, co zostało w nim uwięzione. Czasami
          odbywa się to warstwa po warstwie podczas kolejnych spotkań. Minimalna
          i bezpieczna odległość między sesjami to trzy dni. Częstotliwość
          spotkań raz w tygodniu jest też dobra, aby dać sobie czas na ułożenie
          się efektów poprzedniej sesji.
        </p>
        <p>
          Pod wpływem palety brzmień mogą pojawiać się w nas różne -
          uwarunkowane indywidualnie odczucia. Może to być ciepło, napięcie w
          mięśniach, jak i określone emocje. Mogą się rozpocząć wewnętrzne
          procesy naprawcze. Jest to całkiem normalne zjawisko.
        </p>
        <p>
          Mogą pojawić się także określone wspomnienia i konkretne obrazy w
          umyśle. Zawsze należy się temu przyjrzeć i potem się zastanowić... Co
          też chcą one nam powiedzieć? Cokolwiek się nie pojawi - jest to ważne!
        </p>
        <Image src={shape} alt="styling_element" className={styles.shape} />
      </div>
    </section>
  );
}
