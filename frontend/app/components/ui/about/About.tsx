import styles from "./about.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.intro}>
        <h1 className={styles.introTitle}>
          Introducing Our First-Ever Hackathon
        </h1>

        <div className={styles.cardWrapper}>
          <div className={styles.glassCard}>
            <div className={styles.logoLayer}>
              {/* Your neon SVG / drawing goes here */}
            </div>
          </div>
          <div className={styles.glassCard}>
            <div className={styles.logoLayer}>
              {/* Your neon SVG / drawing goes here */}
            </div>
          </div>
          <div className={styles.glassCard}>
            <div className={styles.logoLayer}>
              {/* Your neon SVG / drawing goes here */}
            </div>
          </div>
        </div>
      </div>
    </div>

   
  );
}
