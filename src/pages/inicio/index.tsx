import { useState, useEffect } from "react";
import { Splash } from "../../components/splash";
import styles from "./styles.module.css";

import { Link } from "react-router-dom";

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
          <Link to="login" className={styles.nave}>
            <button>Começar</button>
          </Link>
        </footer>
      </div>
    </div>
  );
}

export default Start;
