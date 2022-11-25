import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import styles from "./styles.module.css"
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleSignup = () => {
    if (!email | !emailConf | !senha) {
      setError("Preencha todos os campos");
      return;
    } else if (email !== emailConf) {
      setError("Os e-mails não são iguais");
      return;
    }

    const res = signup(email, senha);

    if (res) {
      setError(res);
      return;
    }

    alert("Usuário cadatrado com sucesso!");
    navigate("/");
  };

  return (
    <div className={styles.container}>
    
      <label className={styles.labelOne}>FAÇA LOGIN</label>
      
      <div className={styles.content}>
      
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="email"
          placeholder="Confirme seu E-mail"
          value={emailConf}
          onChange={(e) => [setEmailConf(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <label className={styles.labelError}>{error}</label>
        <Button Text="Inscrever-se" onClick={handleSignup} />
        <label className={styles.labelSignin}>
           Já tem uma conta
           <strong className={styles.strong}>
            <Link to="/">&nbsp;Entre</Link>
           </strong>
        </label>
      </div>
    </div>
  );
};

export default Signup;
