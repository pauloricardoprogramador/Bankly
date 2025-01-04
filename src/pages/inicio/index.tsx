import { Splash } from "../../components/splash";
import styles from "./styles.module.css";

function Start() {
  return (
    <div className={styles.container}>
      <Splash />
      <footer className={styles.footer}>
        <button>Começar</button>
      </footer>
    </div>
  );
}

export default Start;
