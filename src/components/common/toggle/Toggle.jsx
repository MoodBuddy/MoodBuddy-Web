import { useState } from 'react';
import styles from '@styles/toggle.module.css';

const Toggle = ({ onToggleChange }) => {
  const [toggle, setToggle] = useState(false);

  const handleClickToggle = () => {
    setToggle((prev) => {
      const newToggleState = !prev;
      onToggleChange(newToggleState);
      return newToggleState;
    });
  };

  const btnClassName = [
    styles.toggleBtn,
    toggle ? styles.toggleBtnOn : '',
  ].join(' ');

  return (
    <label className={styles.toggleContainer} aria-label="Toggle">
      <input
        className={styles.toggleInput}
        type="checkbox"
        checked={toggle}
        onClick={handleClickToggle}
        data-testid="toggle-input"
      />
      <span className={btnClassName} />
    </label>
  );
};

export default Toggle;
