import { Header } from "../../components/header";
import styles from "./styles.module.css";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { ToastContainer, toast, Bounce } from "react-toastify";
import { Link } from "react-router-dom";

type Props = {
  email: string;
  senha: string;
};

const schema = yup
  .object({
    email: yup
      .string()
      .email("Digite um e-mail válido")
      .required("O e-mail é obrigatório"),
    senha: yup
      .string()
      .min(6, "A senha precisa ter no minímo 6 digitos")
      .required("A senha é obrigatório"),
  })
  .required();

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Props>({ resolver: yupResolver(schema) });

  const handleFormulario: SubmitHandler<Props> = (data) => {
    toast.success("Redirecionando", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
    reset();
    console.log(data);
  };

  return (
    <div className={styles.container}>
      <Header
        titulo="Login"
        subtitulo="Bem-vindo, novamente ! Entre com seu e-mail e senha para acessar sua conta da Bankly"
      />

      <form action="#" onSubmit={handleSubmit(handleFormulario)}>
        <div className={styles.itens}>
          <div className={styles.item}>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              placeholder="Digite o seu e-mail"
              {...(register("email"), { requires: true })}
            />
            <span> {errors.email?.message}</span>
          </div>
          <div className={styles.item}>
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              placeholder="Digite sua senha"
              {...register("senha", { required: true })}
            />
            <span> {errors.senha?.message}</span>
          </div>

          <div className={styles.itensTwo}>
            <div className={styles.check}>
              <input type="checkbox" checked />
              <span>Lembrar de mim</span>
            </div>
            <div className={styles.forgot}>
              <span>Esqueceu a senha?</span>
            </div>
          </div>

          <div className={styles.btn}>
            <button type="submit">Entrar</button>
          </div>

          <div className={styles.footer}>
            <Link to="/cadastro" className={styles.nave}>
              <p>
                Não tem uma conta? <span>Cadastre-se</span>
              </p>
            </Link>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}
export default Login;
