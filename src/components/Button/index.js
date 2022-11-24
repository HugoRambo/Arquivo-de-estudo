import React from "react";
import styles from  "./styles.module.css";

const Button = ({ Text, onClick, Type = "button" }) => {
  return (
    <button className={styles.buttomPlay} type={Type} onClick={onClick}> {Text} </button>
  );
};

export default Button;
