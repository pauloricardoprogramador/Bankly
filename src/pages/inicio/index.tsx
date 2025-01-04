import { useState, useEffect } from "react";
import { Splash } from "../../components/splash";
import styles from "./styles.module.css";

function Start() {
  const [splash, setSplash] = useState(true);

  useEffect(() => {
    const tempoVisivel = setTimeout(() => {
      setSplash(false);
    }, 1000);

    return () => clearTimeout(tempoVisivel);
  }, []);

  return (
    <div>
      {splash && <Splash />}
      <div className={styles.container}>
        <Splash />
        <footer className={styles.footer}>
          <button>Começar</button>
        </footer>
      </div>
    </div>
  );
}

export default Start;
