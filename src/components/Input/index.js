import React from "react";
import styles from "./styles.module.css"

const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <input className={styles.inputTelaInicial}
    value={value}
    onChange={onChange}
    type={type}
    placeholder={placeholder}></input>
     
  );
};

export default Input;
