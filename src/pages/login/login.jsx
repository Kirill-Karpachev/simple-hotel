import styles from "./login.module.css";
import Input from "../../components/ui/input/input";
import { setCookie } from "../../utils/util";

const Login = () => {
  const signIn = (e) => {
    e.preventDefault();

    setCookie("accessToken", "213da312dsad213");
  };

  return (
    <div className={styles.login_bg}>
      <div className={styles.login}>
        <div className={styles.signin}>
          <h2 className={styles.title}>Simple Hotel Check</h2>
          <form className={styles.form} onSubmit={signIn}>
            <div className={styles.inputs}>
              <Input text="Логин" type="email" />
              <Input text="Пароль" type="password" />
            </div>

            <button className={styles.btn}>Войти</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
