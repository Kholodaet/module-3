import css from "./LoginForm.module.css";

import PropTypes from "prop-types";

import { useId } from "react";

const LoginForm = ({ onLogin }) => {
  const loginId = useId();
  const passwordId = useId();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const form = evt.target;
    const { login, password } = form.elements;

    // Викликаємо пропс onLogin
    onLogin({
      login: login.value,
      password: password.value,
    });

    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={css.formContainer}>
      <label htmlFor={loginId}>Login</label>
      <input
        type="text"
        name="login"
        placeholder="Login"
        id={loginId}
        className={css.input}
      />
      <label htmlFor={passwordId}>Password</label>
      <input
        type="password"
        name="password"
        placeholder="Password"
        id={passwordId}
        className={css.input}
      />
      <button type="submit" className={css.button}>
        Login
      </button>
    </form>
  );
};

LoginForm.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default LoginForm;
