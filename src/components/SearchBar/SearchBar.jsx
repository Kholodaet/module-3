/* eslint-disable react/prop-types */

import css from "./SearchBar.module.css";

const SearchBar = ({ value, onChange }) => {
  const handleChange = (evt) => {
    const value = evt.target.value;
    onChange(value);
  };

  return (
    <div className={css.container}>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className={css.input}
      />
      <p className={css.result}>Value: {value}</p>
    </div>
  );
};

export default SearchBar;
