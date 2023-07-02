import styles from "./button-sort.module.css";
import SelectImg from "../../../images/select.svg";

const ButtonSort = ({ choice, setChoice, name, text }) => {
  const handleClick = (e) => {
    if (e.target.name === "rate") {
      if (choice === "rateUp") {
        setChoice("rateDown");
      } else {
        setChoice("rateUp");
      }
    } else {
      if (choice === "priceUp") {
        setChoice("priceDown");
      } else {
        setChoice("priceUp");
      }
    }
  };
  return (
    <button
      className={`${styles.btn} ${
        choice === `${name}Up` || choice === `${name}Down` ? "" : styles.btnUnActive
      }`}
      name={name}
      onClick={handleClick}
    >
      {text}
      <div className={styles.imgs}>
        <img
          className={`${styles.imgUp} ${
            choice === `${name}Up` ? styles.imgUpUnActive : ""
          }`}
          src={SelectImg}
          alt=""
        />
        <img
          className={`${styles.imgDown} ${
            choice === `${name}Down` ? "" : styles.imgDownActive
          }`}
          src={SelectImg}
          alt=""
        />
      </div>
    </button>
  );
};

export default ButtonSort;
