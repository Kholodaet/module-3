/* eslint-disable react/prop-types */

import { useId } from "react";
import css from "./LangSwither.module.css";

const LangSwitcher = ({ value, onSelect }) => {
  const selectId = useId();

  return (
    <div className={css.container}>
      <label htmlFor={selectId} className={css.label}>
        Choose language
      </label>
      <select
        id={selectId}
        value={value}
        onChange={(evt) => onSelect(evt.target.value)}
        className={css.select}
      >
        <option value="uk">Ukrainian</option>
        <option value="en">English</option>
        <option value="pl">Polish</option>
      </select>
    </div>
  );
};

export default LangSwitcher;
