import PropTypes from "prop-types";
import styles from "./Checkbox.module.css";

const Checkbox = ({ hasAccepted, onCheckboxChange }) => {
  const handleChange = (evt) => {
    onCheckboxChange(evt.target.checked);
  };

  return (
    <div className={styles.checkboxContainer}>
      <label className={styles.checkboxLabel}>
        <input
          type="checkbox"
          name="terms"
          checked={hasAccepted}
          onChange={handleChange}
          className={styles.checkboxInput}
        />
        I accept terms and conditions
      </label>
      <button
        type="button"
        disabled={!hasAccepted}
        className={styles.checkboxButton}
      >
        Proceed
      </button>
    </div>
  );
};

Checkbox.propTypes = {
  hasAccepted: PropTypes.bool.isRequired,
  onCheckboxChange: PropTypes.func.isRequired,
};

export default Checkbox;
