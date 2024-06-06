import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <h1
          className={styles.title}
        >{`NVIDIA Card required to play this game driven by WebAssembly`}</h1>
        <p
          className={styles.subtitle}
        >{`Please open this website on a device with NVIDIA graphic card to play the game.`}</p>
      </div>
    </div>
  );
}
