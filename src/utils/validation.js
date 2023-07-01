const validation = ({
  email,
  password
}) => {
  let errors = {};
  if (!email) {
    errors.email = "Email не может быть пустым";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = "Введитe корректный email";
  }

  if (!password) {
    errors.password = "Пароль не может быть пустым";
  } else if (password.length < 8) {
    errors.password = "Пароль должен быть больше 8 символов";
  } else if (!/[a-zA-Z0-9]+/.test(password)) {
    errors.password = "Пароль не должен содержать кириллицу";
  }
  return errors;
};

export default validation;
