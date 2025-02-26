import Image from "next/image";
import styles from "./page.module.css";
import shape from "@/public/styling_shape.svg";
import FaqModule from "@/components/utils/FaqModule";
import FadeIn from "@/components/utils/FadeInAnim";
import ScaleIn from "@/components/utils/ScaleInAnim";

export default function FAQ() {
  return (
    <main>
      <section className={styles.titleSection}>
        <div className={styles.title}>
          <ScaleIn>
            <h1>Najczęściej Zadawane Pytania</h1>
          </ScaleIn>
        </div>
      </section>
      <FadeIn>
        <section className={styles.faqSection}>
          <Image className={styles.shape} src={shape} alt="styling_element" />
          <FaqModule question="Czym są misy śpiewające?">
            <div className={styles.answer}>
              <p>
                Misy tybetańskie (znane również jako himalajskie) to tak
                naprawdę dzwony, które wibrują i podczas swojej gry wydają
                bogaty, głęboki dźwięk.
              </p>
              <p>
                Wibracje te można poczuć w ciele i usłyszeć. Najpierw powstały z
                konieczności. Używano ich jako miary zboża, gdy rodzina
                uprawiała jedną uprawę, a druga coś innego, a misy używano do
                odmierzania i wymiany plonów.
              </p>
              <p>
                Według Mistrza Gopali, misy były również używane jako forma
                leczenia, gdy niewiele innych sposobów było dostępnych.
              </p>
              <p>
                Na przykład, jeśli kobieta urodziła i straciła dużo krwi, piła z
                mis i szybko odzyskiwała utracone minerały.
              </p>
              <p>
                Z biegiem czasu misy zaczęto wykorzystywać w ceremoniach
                religijnych lub duchowych, w tym do medytacji lub uzdrawiania
                szamańskiego.
              </p>
              <p>
                Pojedyncza misa jest ręcznie kuta ponad 1200 razy, aby była
                gotowa. Proces ten wytwarza w niej bardzo mocny dźwięk i
                wibrację trwającą kilka minut, którą można poczuć, gdy znajduje
                się blisko ciała.
              </p>
              <p>
                Każda misa ma specyficzny ton, który jest powiązany z czakrą lub
                punktem energetycznym w ciele. Gdy ktoś uruchamia misy i posiada
                &quot;muzyczne ucho&quot;, słyszy, gdzie ktoś utyka z energią,
                ponieważ misy brzmią płasko lub tępo w takim przypadku.
                Kontynuowanie gry powoduje balansowanie osłabionych miejsc,
                dopóki nie staną się one bardziej wyrównane.
              </p>
            </div>
          </FaqModule>
          <FaqModule question="Jakie są korzyści z użycia śpiewających mis?">
            <div className={styles.answer}>
              <p>
                Wibracje i ton śpiewających mis pomagają zrelaksować umysł i
                ciało.
              </p>
              <p>
                Powinny one pomóc Ci ponownie połączyć umysł, ciało i ducha i
                zapewnić głębokie poczucie spokoju, tak jakby warstwy stresu,
                których codziennie doświadczasz, były złuszczane niczym warstwy
                cebuli.
              </p>
              <p>
                <strong>Inne znane korzyści obejmują:</strong>
              </p>
              <ul className={styles.answerList}>
                <li>Uwalnianie przewlekłego napięcia lub bólu w ciele,</li>
                <li>wspomaganie krążenia,</li>
                <li>przyspieszanie gojenia się organizmu,</li>
                <li>obniżanie ciśnienia krwi,</li>
                <li>pomaganie w stanach lękowych, stresie lub depresji,</li>
                <li>dodawanie energii,</li>
                <li>zwiększanie kreatywności,</li>
                <li>powodowanie lepszego snu,</li>
              </ul>
            </div>
          </FaqModule>
          <FaqModule question="Jakich metali użyto do wykonania misy?">
            <table className={styles.answerTable}>
              <thead>
                <tr>
                  <th>Metal</th>
                  <th>Planeta</th>
                  <th>Obszar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Złoto</td>
                  <td>Słońce</td>
                  <td>Serce</td>
                </tr>
                <tr>
                  <td>Srebro</td>
                  <td>Księżyc</td>
                  <td>Korzeń</td>
                </tr>
                <tr>
                  <td>Miedź</td>
                  <td>Wenus</td>
                  <td>Sakral</td>
                </tr>
                <tr>
                  <td>Żelazo</td>
                  <td>Mars</td>
                  <td>Splot</td>
                </tr>
                <tr>
                  <td>Cyna</td>
                  <td>Jowisz</td>
                  <td>Korona</td>
                </tr>
                <tr>
                  <td>Cynk</td>
                  <td>Merkury</td>
                  <td>Gardło</td>
                </tr>
                <tr>
                  <td>Ołów</td>
                  <td>Saturn</td>
                  <td>Trzecie oko</td>
                </tr>
              </tbody>
            </table>
          </FaqModule>
          <FaqModule question="Jak przebiega sesja?">
            <div className={styles.answer}>
              <p>
                Sesji na misach śpiewających nie da się w pełni wytłumaczyć -
                trzeba ją <strong>DOŚWIADCZYĆ</strong>.
              </p>
              <p>
                Nie chcę, aby ktokolwiek zaczynał od z góry przyjętego
                wyobrażenia o tym, jakie rezultaty osiągnie, ponieważ każdy
                dzień jest inny i trzeba tego doświadczyć bez oczekiwań i
                osądów.
              </p>
              <p>
                Zadaniem uczestnika sesji jest po prostu zrelaksować się,
                oddychać i pozwolić sobie na to wszystko.
              </p>
              <p>
                Każda sesja trwa około godziny i rozpoczyna się krótką ciszą w
                pozycji siedzącej gdzie formułowana jest intencja o dobry efekt
                działania mis, łaskę, a także o to, aby uspokoić umysł i
                przygotować go do tego co nastąpi.
              </p>
              <p>
                Następnie podczas zabiegu leży się całkowicie ubranym na macie,
                twarzą do góry, a misy są umieszczone wokół ciała, w zależności
                od tego, jaki układ jest potrzebny by użyć go w danym momencie.
              </p>
              <p>
                Oczy powinny być zamknięte, dzięki czemu będzie można skupić się
                na dźwięku i wibracjach.
              </p>
              <p>
                Kiedy zaczniemy, właśnie te wibracje i dźwięki wypełnią
                powietrze, a umysł i ciało zaczną się relaksować i
                synchronizować z misami.
              </p>
              <p>
                To ostatecznie uspokoi układ nerwowy, mózg i przełoży się na
                fizyczne procesy naprawcze balansujące w ciele fizycznym.
              </p>
            </div>
          </FaqModule>
          <FaqModule question="Jaki jest cel sesji śpiewającymi misami?">
            <div className={styles.answer}>
              <p>
                Uzdrawianie misami należy traktować jako medytację. To okazja,
                aby się zrelaksować, oddychać powoli i po prostu uwolnić od
                napięć i lęków, których się trzymamy.
              </p>
              <p>
                Występuje też element energetyczny, który jest jakościowo
                zależny od osoby przeprowadzającej sesję. Na początku jest
                formułowana intencja i w zależności od zewnętrznych uwarunkowań
                możliwe stają się przepływy balansujących energii.
              </p>
              <p>
                Niektórzy ludzie podczas śpiewu mis mogą zasnąć prawie że
                natychmiast, inni będą w stanie świadomości lub okresowo poza
                nią, a jeszcze inni będą w uważności przez całą sesję.
              </p>
              <p>
                Kiedy misy zostają uruchomione, płynnie rozpoczyna się
                synchronizowanie nas z wibracjami, a to w efekcie reguluje
                umysł, ciało i ducha.
              </p>
            </div>
          </FaqModule>
          <FaqModule question="A jeśli nie mogę się zrelaksować podczas sesji?">
            <div className={styles.answer}>
              <p>
                Jeśli twój umysł zaczyna wędrować podczas sesji i zacznie myśleć
                o twojej liście rzeczy do zrobienia, to dobrze ... po prostu
                zauważ to bez osądu i wróć do stanu uspokojenia.
              </p>
              <p>
                Dla niektórych osób trudniej będzie się wyciszyć, a innym może
                to przyjść szybko. Jeśli masz problemy z relaksacją, skoncentruj
                całą swoją uwagę na rozluźnianiu języka. Ta technika zwykle
                szybko uspokaja.
              </p>
            </div>
          </FaqModule>
          <FaqModule question="W jaki sposób ton mis pomaga mi poczuć się lepiej?">
            <div className={styles.answer}>
              <p>
                Każda misa ma specyficzny ton. Każdy ton odnosi się do
                określonego punktu energetycznego lub obszaru gdzie jest
                umiejscowiony konkretny narząd ciała.
              </p>
              <p>
                Gdy mamy zaburzenie w ciele, a energia jest zatrzymana, zwykle
                doświadczamy bólu lub dyskomfortu, lub jeśli trwa to
                wystarczająco długo, zaburzenie takie powoduje prawdziwą
                chorobę. Jakkolwiek, ponieważ nasze ciała składają się z 70%
                wody, możemy użyć delikatnego dźwięku i wibracji mis, aby
                subtelnie zamieszać nasze cząsteczki wody oraz je przesunąć i
                otworzyć energię w ciele.
              </p>
            </div>
          </FaqModule>
          <FaqModule question="Jak często można korzystać z dobroci śpiewających mis?">
            <div className={styles.answer}>
              <p>
                Jest to silne oddziaływanie i efekty rozkładają się w czasie
                również po spotkaniu. Dwa razy w tygodniu - maksymalnie, ale
                sesje cotygodniowe, dwutygodniowe lub miesięczne odpowiednio
                przynoszą poprawę. Im częściej poddajemy się temu, tym większe
                korzyści to przynosi.
              </p>
            </div>
          </FaqModule>
          <FaqModule question="Czy pacjenci chorzy na raka mogą tego próbować?">
            <div className={styles.answer}>
              <p>
                Absolutnie! Pacjenci chorzy na raka mogą odnieść z tego korzyść,
                ponieważ nie tylko ulega zmniejszeniu niepokój i poprawia się
                jakość snu, ale także cała ta wibracyjność wprowadza w stan
                relaksu.
              </p>
              <p>Istnieje książka zatytułowana:</p>
              <p>
                <strong>
                  The Healing Power of Sound (Recovery from Life-Threatening
                  Illness using Sound, Voice and Music)
                </strong>
              </p>
              <p>
                <strong>
                  Lecznicza potęga dźwięku (Powrót do zdrowia po chorobach
                  zagrażających życiu za pomocą dźwięku, głosu i muzyki),
                </strong>
              </p>
              <p>
                w której dr <strong>Mitchell Gaynor</strong> pisze, że jego
                zdaniem dźwięki mis wpływają na arytmiczny ruch występujący w
                komórkach nowotworowych, a następnie pomagają te komórki
                zmienić.
              </p>
              <p>
                Wykazano, że śpiewające misy łagodzą stany lękowe, zmniejszają
                zmęczenie, oraz nudności i wymioty spowodowane chemioterapią.
              </p>
            </div>
          </FaqModule>
          <FaqModule question="A misy gdy ktoś nosi i używa aparat słuchowy?">
            <div className={styles.answer}>
              <p>
                Sesja misami jest dopuszczalna, gdy się go zdejmie lub wyłączy,
                ponieważ dźwięk mis może w taki sposób wpłynąć na aparat
                słuchowy, że spowoduje to dyskomfort.
              </p>
            </div>
          </FaqModule>
          <FaqModule question="Co się stanie, jeśli przyjdzie kobieta w ciąży?">
            <div className={styles.answer}>
              <p>
                Gdy dziecko unosi się w łonie mamy jak rybka w woreczku z wodą,
                będzie ono bardziej wrażliwe na dźwięki dochodzące ze świata
                zewnętrznego.
              </p>
              <p>
                Sugeruje się, aby w pierwszym trymestrze unikać działań przy
                pomocy mis śpiewających. Następnie możesz to robić, ale misy
                muszą być umieszczone dalej od osoby poddawanej wibracjom.
              </p>
            </div>
          </FaqModule>
          <FaqModule question="Co się stanie, jeśli mam w ciele metalowe części?">
            <div className={styles.answer}>
              <p>
                Protezy typu biodrowego lub kolanowego są bezpieczne podczas
                zabiegów misami śpiewającymi. Jednakże mis nie można umieszczać
                na ciele, ponieważ metal będzie wibrował i może być niewygodny,
                dlatego pamiętaj, aby poinformować operatora mis przed sesją,
                aby mógł upewnić się, że wszystkie one są umieszczone dalej od
                ciała.
              </p>
            </div>
          </FaqModule>
          <FaqModule question="Co się stanie, jeśli mam rozrusznik serca lub sztuczną zastawkę serca?">
            <div className={styles.answer}>
              <p>
                U pacjentów z wszczepionym kardiowerterem-defibrylatorem lub
                stentami wieńcowymi NIE zaleca się operowania misami. Niestety
                wibracje mogą powodować dyskomfort lub nieprawidłowe działanie
                tych delikatnych urządzeń.
              </p>
            </div>
          </FaqModule>
          <FaqModule question="Co jeśli mam migrenę lub szum w uszach?">
            <div className={styles.answer}>
              <p>
                Misy są idealne dla osób cierpiących na migreny. Możesz w
                rzeczywistości umieścić misę odwróconą do góry nogami
                bezpośrednio na czyjejś głowie i uruchamiać ją, aby uwolnić
                zablokowaną energię i zapewnić przepływ krwi do tego obszaru.
                Wydatnie pomaga to w bólach głowy.
              </p>
              <p>
                W przypadku szumów usznych, używając mniejszej misy o wysokim
                tonie, możesz u wielu faktycznie zatrzymać dzwonienie w uszach.
              </p>
            </div>
          </FaqModule>
          <FaqModule question="Co jeśli mam epilepsję?">
            <div className={styles.answer}>
              <p>
                Jeśli cierpisz na epilepsję, najlepiej uzyskać zgodę swojego
                lekarza przed wykonaniem sesji misami, aby upewnić się, że nie
                grozi Ci atak spowodowany dźwiękowymi wibracjami.
              </p>
            </div>
          </FaqModule>
          <FaqModule
            question="Co się stanie, jeśli mam chorobę Parkinsona lub stwardnienie
                rozsiane?"
          >
            <p>
              Wpływ muzyki na ludzki układ nerwowy został zilustrowany na
              przykładzie pacjentów z poważnymi zaburzeniami neurologicznymi,
              którzy szybko i radykalnie reagują na leczenie dźwiękiem. Nawet
              film PRZEBUDZENIA opowiadał historię Olivera Sacksa i jego pracy z
              muzyką oraz chorob Parkinsona. W przypadku osób z problemami
              motorycznymi muzyka działa jak katalizator i nawet usłyszenie
              rytmu może spowodować, że wyskoczą z krzeseł i zaczną tańczyć.
              Misy łączą się z tą samą częścią mózgu i pomagają ponownie
              połączyć w nim obwody nerwowe.
            </p>
          </FaqModule>
          <FaqModule question="Kiedy należy całkowicie zrezygnować z używania misy śpiewającej?">
            <div className={styles.answer}>
              <p>
                Kiedy zetknęliśmy się z jakąś chorobą lub stanem, powinniśmy
                całkowicie unikać używania mis śpiewających lub uczestniczenia w
                terapii dźwiękiem mis i uzdrawianiu.
              </p>
              <p>
                Jeśli cierpisz na pewne zaburzenia neurologiczne, najlepiej
                odmówić używania mis śpiewających. Jedną z nich jest epilepsja,
                osoba chora na padaczkę powinna unikać terapii dźwiękiem,
                podczas której wykorzystuje się misy śpiewające. Jeśli dana
                osoba chce wziąć udział, lepiej najpierw zasięgnąć porady
                lekarza, aby upewnić się, że ma odpowiednie leki
                przeciwpadaczkowe i nie grozi jej zarażenie w wyniku wibracji
                dźwiękowych. Podobnie osoby cierpiące na chorobę Parkinsona i
                korzystające z urządzenia do głębokiej stymulacji mózgu (DBS)
                również powinny unikać używania mis śpiewających. Pacjenci z
                innymi zaburzeniami neurologicznymi również powinni skonsultować
                się z lekarzem, aby upewnić się, że terapia misami śpiewającymi
                nie będzie miała negatywnego wpływu na ich zdrowie.
              </p>
              <p>
                Co więcej, mis śpiewających należy unikać, jeśli masz w
                organizmie rozrusznik serca, sztuczne zastawki serca,
                wszczepialny kardiowerter-defibrylator (ICD), stent wieńcowy,
                zastawkę sercową metalowe implanty, metalowe zszywki i metalowe
                wkładki. Te metale i sztuczne części ciała mogą się trząść, gdy
                wibracje przechodzą przez ciało, co może spowodować
                nieprawidłowe działanie i poważny stan.
              </p>
            </div>
          </FaqModule>

          <FaqModule question="Czy misy pomagają w zdrowiu psychicznym?">
            <div className={styles.answer}>
              <p>
                Moje doświadczenie z misami jest takie, że możesz poczuć
                natychmiastową ulgę lub uniesienie... jakby wszystkie Twoje
                troski zostały zmyte lub ciężar świata został zdjęty.
                Przynajmniej tymczasowo pomaga ci odzyskać spokój.
              </p>
            </div>
          </FaqModule>
          <FaqModule question="Czy misy śpiewające są formą rozrywki?">
            <div className={styles.answer}>
              <p>
                Jeśli są wykonywane prawidłowo, są w rzeczywistości formą
                uzdrawiania, chociaż możesz cieszyć się zabiegiem misami tak
                samo, jakbyś uczestniczył w koncercie. Praktykujący pracuje nad
                celowym przesunięciem nierównowagi wibracyjnej, co następnie
                wpłynie na twoje fizyczne energetyczne uzdrowienie. Udowodniono,
                że dźwięk wpływa na nasz układ autonomiczny, odpornościowy i
                hormonalny, a także na przekaźniki neuropeptydowe w mózgu.
              </p>
            </div>
          </FaqModule>
          <FaqModule question="Co jeśli jestem wrażliwy na dźwięk?">
            <div className={styles.answer}>
              <p>
                Poinformuj swojego praktykującego, jeśli jesteś wrażliwy na
                dźwięk lub wibracje. W prywatnym otoczeniu misy można ustawić
                tak, aby były dalej od ciała, jeśli w dowolnym momencie
                poczujesz dyskomfort. Po prostu powiedz i daj mi znać.
              </p>
            </div>
          </FaqModule>
          <FaqModule question="Jaka jest twoja polityka anulowania?">
            <div className={styles.answer}>
              <p>
                Aby odwołać wizytę, należy powiadomić o tym fakcie z 24-
                godzinnym wyprzedzeniem, w przeciwnym razie zostanie naliczona
                pełna opłata za sesję. Proszę NIE spóźniać się na sesję. Godziny
                wizyt są ustalane indywidualnie i nie mogą zostać wydłużone poza
                podany czas, aby uwzględnić spóźnienia. Jeśli się spóźnisz,
                sesja zostanie skrócona. Jeśli spóźnisz się na więcej niż 15
                minut, sesja zostanie uznana za odwołaną.
              </p>
            </div>
          </FaqModule>
        </section>
      </FadeIn>
    </main>
  );
}
