import React from 'react';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { Filter } from '../types';
import styles from './Header.module.css';

export default function Header({ filter, onClickFilter }) {
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
