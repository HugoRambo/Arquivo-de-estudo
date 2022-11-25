import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import styles from "./styles.module.css"

const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <>
    <div className={styles.homeInterface}>
      
    
      <title>Home</title>
      <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
      Sair
      </Button>
      </div>
    </>
  );

  }
export default Home;
