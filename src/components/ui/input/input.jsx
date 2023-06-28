import { useState } from "react";
import styles from "./input.module.css";

const Input = ({ text, type, ...rest }) => {
  const [err, serErr] = useState(false);
  const handleErr = () => {
    serErr(false);
  };

  return (
    <label className={styles.label}>
      {text}
      <input
        className={styles.input}
        type={type}
        onClick={handleErr}
        {...rest}
      />
      {err && (
        <span className={styles.err}>
          {type === "email" ? "Email" : "Password"} неверный
        </span>
      )}
    </label>
  );
};
export default Input;
