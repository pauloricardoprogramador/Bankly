import { Header } from "../../components/header";
import styles from "./styles.module.css";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { ToastContainer, toast, Bounce } from "react-toastify";
import { Link } from "react-router-dom";

type Props = {
  nome: string;
  sobrenome: string;
  email: string;
  senha: string;
  confirmeSenha: string;
};

const schema = yup
  .object({
    nome: yup.string().required("O nome é obrigatório"),
    sobrenome: yup.string().required("O sobrenome é obrigatório"),
    email: yup
      .string()
      .email("Digite um e-mail válido")
      .required("O e-mail é obrigatório"),
    senha: yup
      .string()
      .min(6, "A senha precisa ter no minímo 6 digitos")
      .required("A senha é obrigatório"),
    confirmeSenha: yup
      .string()
      .required("Confirmar a senha é obrigatório")
      .oneOf([yup.ref("senha")], "As senhas precisam ser iguais"),
  })
  .required();

function Cadastro() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Props>({ resolver: yupResolver(schema) });

  const handleFormulario: SubmitHandler<Props> = (data) => {
    toast.success("Conta criada com sucesso!", {
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
        titulo="Cadastro"
        subtitulo="Preencha os dados abaixo para começar a usar os serviços do Banbly. É rápido e seguro."
      />

      <form action="#" onSubmit={handleSubmit(handleFormulario)}>
        <div className={styles.itens}>
          <div className={styles.item}>
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              placeholder="Digite o seu nome"
              {...register("nome", { required: true })}
            />
            <span> {errors.nome?.message}</span>
          </div>
          <div className={styles.item}>
            <label htmlFor="email">Sobrenome</label>
            <input
              type="text"
              placeholder="Digite o seu sobrenome"
              {...register("sobrenome", { required: true })}
            />
            <span> {errors.sobrenome?.message}</span>
          </div>
          <div className={styles.item}>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              placeholder="Digite o seu e-mail"
              {...register("email", { required: true })}
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
          <div className={styles.item}>
            <label htmlFor="confirme-senha">Repita sua Senha</label>
            <input
              type="password"
              placeholder="Digite sua senha"
              {...register("confirmeSenha", { required: true })}
            />
            <span> {errors.confirmeSenha?.message}</span>
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
            <Link to="/login" className={styles.nave}>
              <p>
                Já tem uma conta? <span>Login</span>
              </p>
            </Link>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}
export default Cadastro;
