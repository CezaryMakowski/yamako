import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <section className={styles.section}>
      <div>
        <h1>404 - Page Not Found</h1>
        <p>Przepraszamy, ale podana strona nie istnieje.</p>
      </div>
    </section>
  );
}
