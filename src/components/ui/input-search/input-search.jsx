import styles from "./input-search.module.css";

const InputSearch = ({ text, type, valid, ...rest }) => {
  return (
    <label className={styles.label}>
      {text}
      <input className={styles.input} type={type} {...rest} required />
    </label>
  );
};
export default InputSearch;
