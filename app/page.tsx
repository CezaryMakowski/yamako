import Introduction from "@/components/Introduction";
import styles from "./page.module.css";
import AboutSession from "@/components/AboutSession";
import AboutMe from "@/components/AboutMe";
import HowItsDone from "@/components/HowItsDone";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import FadeIn from "@/components/utils/FadeInAnim";
import ScaleIn from "@/components/utils/ScaleInAnim";

export default function Home() {
  return (
    <main className={styles.main}>
      <Introduction />
      <FadeIn>
        <AboutMe />
      </FadeIn>
      <AboutSession />
      <FadeIn>
        <HowItsDone />
      </FadeIn>
      <ScaleIn>
        <Pricing />
      </ScaleIn>
      <Contact />
    </main>
  );
}
