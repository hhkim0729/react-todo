import React, { useContext } from 'react';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { DarkModeContext } from '../context/DarkModeContext';
import styles from './Header.module.css';

export default function Header({ filters, filter, onFilterChange }) {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <header className={`${styles.Header} ${darkMode ? styles.dark : ''}`}>
      <button
        className={`${styles.button} ${styles.mode}`}
        onClick={toggleDarkMode}
      >
        {darkMode ? <MdLightMode /> : <MdDarkMode />}
      </button>
      <ul className={styles.filters}>
        {filters.map((value, index) => (
          <li key={index}>
            <button
              className={styles.button}
              onClick={() => onFilterChange(value)}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}
