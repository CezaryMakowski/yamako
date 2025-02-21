import Introduction from "@/components/Introduction";
import styles from "./page.module.css";
import AboutSession from "@/components/AboutSession";
import AboutMe from "@/components/AboutMe";
import HowItsDone from "@/components/HowItsDone";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import FadeIn from "@/components/utils/FadeInAnim";

export default function Home() {
  return (
    <main className={styles.main}>
      <Introduction />
      <AboutSession />
      <FadeIn>
        <AboutMe />
      </FadeIn>
      <FadeIn>
        <HowItsDone />
      </FadeIn>
      <FadeIn>
        <Pricing />
      </FadeIn>
      <FadeIn>
        <Contact />
      </FadeIn>
    </main>
  );
}
