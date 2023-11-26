import React, { useState } from "react";
import { FaSearchengin } from "react-icons/fa";
import styles from "./input.module.scss";
import ButtonSecoundary from "../ButtonSecoundary/index";

export default function Search({
  placeholder,
  type,
  name,
  onBlur,
  onClick,
  onFocus,
  onKeyDown,
  label,
  theme,
}) {
  const [word, setWord] = useState();
  return (
    <div
      className={styles.container}
      style={{ backgroundColor: theme === "light" ? "#484848" : "#f6f6f6" }}>
      <FaSearchengin size={37} className={styles.icon} />
      <input
        type={type}
        onChange={(e) => setWord(e.target.value)}
        className={styles.input}
        placeholder={placeholder}
        onFocus={onFocus}
        name={name}
        onBlur={onBlur}
        onKeyDown={onKeyDown}></input>
      <ButtonSecoundary width="100px" onClick={() => onClick(word)}>
        {label}
      </ButtonSecoundary>
    </div>
  );
}
