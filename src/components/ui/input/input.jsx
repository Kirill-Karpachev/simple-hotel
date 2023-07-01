import styles from "./input.module.css";

const Input = ({ text, type, err, ...rest }) => {
  return (
    <label className={`${styles.label} ${err ? styles.labelErr : ""}`}>
      {text}
      <input
        className={`${styles.input} ${err ? styles.inputErr : ""}`}
        type={type}
        {...rest}
        required
      />
      {err && (
        <span className={`${styles.err} ${err.err ? styles.active : ""}`}>
          {err}
        </span>
      )}
    </label>
  );
};

export default Input;
