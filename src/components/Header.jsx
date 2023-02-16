import React from 'react';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { Filter } from '../types';
import styles from './Header.module.css';

export default function Header({ onClickFilter }) {
  const handleClick = ({ target }) => {
    if (target.nodeName === 'BUTTON') {
      onClickFilter(target.innerText);
    }
  };

  return (
    <header className={styles.Header} onClick={handleClick}>
      <button className={styles.button}>
        <MdLightMode />
      </button>
      <div className={styles.filters}>
        <button className={`${styles.button} ${styles.active}`}>
          {Filter.all}
        </button>
        <button className={styles.button}>{Filter.active}</button>
        <button className={styles.button}>{Filter.completed}</button>
      </div>
    </header>
  );
}
