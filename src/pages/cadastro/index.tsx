import { Header } from "../../components/header";
import styles from "./styles.module.css";

function Cadastro() {
  return (
    <div className={styles.container}>
      <Header
        titulo="Login"
        subtitulo="Bem-vindo, novamente ! Entre com seu e-mail e senha para acessar sua conta da Bankly"
      />

      <form action="#">
        <div className={styles.itens}>
          <div className={styles.item}>
            <label htmlFor="nome">Nome</label>
            <input type="text" placeholder="Digite o seu nome" id="nome" />
            <span></span>
          </div>
          <div className={styles.item}>
            <label htmlFor="email">Sobrenome</label>
            <input
              type="text"
              placeholder="Digite o seu e-mail"
              id="sobrenome"
            />
            <span></span>
          </div>
          <div className={styles.item}>
            <label htmlFor="email">E-mail</label>
            <input type="email" placeholder="Digite o seu e-mail" id="email" />
            <span></span>
          </div>
          <div className={styles.item}>
            <label htmlFor="senha">Senha</label>
            <input type="password" placeholder="Digite sua senha" id="senha" />
            <span></span>
          </div>
          <div className={styles.item}>
            <label htmlFor="confirme-senha">Repita sua Senha</label>
            <input
              type="password"
              placeholder="Digite sua senha"
              id="confirme-senha"
            />
            <span></span>
          </div>

          <div className={styles.itensTwo}>
            <div className={styles.check}>
              <input type="checkbox" checked />
              <span>Lembrar de mim</span>
            </div>
          </div>

          <div className={styles.btn}>
            <button type="submit">Entrar</button>
          </div>

          <div className={styles.footer}>
            <p>
              Já tem uma conta? <span>Login</span>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
export default Cadastro;
