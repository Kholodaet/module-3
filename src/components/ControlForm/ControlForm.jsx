import css from "./ControlForm.module.css";

/* eslint-disable react/prop-types */
const ControlForm = ({ values, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className={css.form}>
      <input
        type="text"
        name="login"
        value={values.login}
        onChange={onChange}
        className={css.input}
        placeholder="Login"
      />
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={onChange}
        className={css.input}
        placeholder="Password"
      />
      <button type="submit" className={css.button}>
        Login
      </button>
    </form>
  );
};

export default ControlForm;
