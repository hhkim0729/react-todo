import React, { useContext } from 'react';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { DarkModeContext } from '../context/DarkModeContext';
import { Filter } from '../types';
import styles from './Header.module.css';

export default function Header({ filter, onClickFilter }) {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  const handleClickFilter = ({ target }) => {
    if (target.nodeName === 'BUTTON') {
      onClickFilter(target.innerText);
    }
  };

  return (
    <header className={`${styles.Header} ${darkMode ? styles.dark : ''}`}>
      <button
        className={`${styles.button} ${styles.mode}`}
        onClick={toggleDarkMode}
      >
        {darkMode ? <MdLightMode /> : <MdDarkMode />}
      </button>
      <div className={styles.filters} onClick={handleClickFilter}>
        <button
          className={`${styles.button} ${
            filter === Filter.all ? styles.active : ''
          }`}
        >
          {Filter.all}
        </button>
        <button
          className={`${styles.button} ${
            filter === Filter.active ? styles.active : ''
          }`}
        >
          {Filter.active}
        </button>
        <button
          className={`${styles.button} ${
            filter === Filter.completed ? styles.active : ''
          }`}
        >
          {Filter.completed}
        </button>
      </div>
    </header>
  );
}
