import styles from "./about.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.intro}>
        <h2 className={styles.introTitle}>
          Introducing Our First-Ever Hackathon
        </h2>

        <div className={styles.cardWrapper}>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
        </div>
      </div>

      <div className={styles.tracks}>
        <div className={styles.tracksTitle}>Two Tracks</div>
        <button className={styles.trackCardCS}>CS</button>
        <button className={styles.trackCardCE}>CE</button>
      </div>
    </div>
  );
}
