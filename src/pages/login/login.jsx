import styles from "./login.module.css";
import Input from "../../components/ui/input/input";
import { setCookie } from "../../utils/util";
import { useDispatch } from "react-redux";
import { AUTH } from "../../services/actions/user";
import { useForm } from "../../utils/use-form";
import Button from "../../components/ui/button/button";
import { useEffect, useState } from "react";
import validation from "../../utils/validation";

const Login = () => {
  const { values, handleChange } = useForm({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [dataIsCorrect, setDataIsCorrect] = useState(false);
  const dispatch = useDispatch();

  const signIn = (e) => {
    e.preventDefault();
    setErrors(validation(values));
    setDataIsCorrect(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && dataIsCorrect) {
      dispatch({ type: AUTH, payload: values });
      setCookie("accessToken", values.email + values.password);
    }
  }, [dataIsCorrect, dispatch, errors, values]);

  return (
    <div className={styles.login_bg}>
      <div className={styles.login}>
        <div className={styles.signin}>
          <h2 className={styles.title}>Simple Hotel Check</h2>
          <form className={styles.form} onSubmit={signIn} noValidate>
            <div className={styles.inputs}>
              <Input
                text="Логин"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                err={errors.email}
              />
              <Input
                text="Пароль"
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                err={errors.password}
              />
            </div>

            <Button text={"Войти"} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
