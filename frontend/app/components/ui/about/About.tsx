import styles from "./about.module.css";

export default function About() {
  return (
    <>
      <div className={styles.about}>
        <div className={styles.intro}>
          <h1>About</h1>
          <div className={styles.card1}></div>
          <div className={styles.card2}></div>
          <div className={styles.card3}></div>
        </div>
        <div className={styles.tracks}>
          <div className={styles.trackCS}>
            <h1>CS </h1>
          </div>
          <div className={styles.trackCE}>
            <h1>CE</h1>
          </div>
        </div>
      </div>
    </>
  );
}
