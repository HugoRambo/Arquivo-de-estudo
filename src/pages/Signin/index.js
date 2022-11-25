import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import styles from "./styles.module.css";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Signin = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();
    
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email | !senha) {
      setError("Preencha todos os campos");
      return;
    }

    const res = signin(email, senha);

    if (res) {
      setError(res);
      return;
    }

    navigate("/home");
  };

  return (
    <div className={styles.container}>
      <label className={styles.label}>SISTEMA DE LOGIN</label>
      <div className={styles.contentGeral}>
        <Input
          className={styles.buttomPlay}
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
          <Input
          className={styles.buttomPlay}
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <label className={styles.labelError}>{error}</label>
        
        <Button className={styles.buttomPlay} Text="Entrar" onClick={handleLogin} />
        <label className={styles.labelSignup}> Não tem uma conta?
        <strong className={styles.strong}>
        <Link to="/signup">&nbsp;Registre-se</Link>
        </strong>
        </label>
      </div>
    </div>
  );
};

export default Signin;
