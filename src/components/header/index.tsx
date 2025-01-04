import styles from "./styles.module.css";

type Props = {
  titulo: string;
  subtitulo: string;
};

export function Header({ titulo, subtitulo }: Props) {
  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>{titulo}</h1>
      <p className={styles.subtitulo}>{subtitulo}</p>
      <hr/>
    </div>
  );
}