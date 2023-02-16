import React, { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { DarkModeContext } from '../context/DarkModeContext';
import styles from './Footer.module.css';

export default function Footer({ onAddItem }) {
  const [text, setText] = useState('');
  const { darkMode } = useContext(DarkModeContext);

  const handleChangeInput = ({ target }) => {
    setText(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) {
      return;
    }
    onAddItem({ id: uuidv4(), text, isDone: false });
    setText('');
  };

  return (
    <form
      className={`${styles.Footer} ${darkMode ? styles.dark : ''}`}
      onSubmit={handleSubmit}
    >
      <input
        type='text'
        name='todo'
        onChange={handleChangeInput}
        value={text}
        placeholder='Add Todo'
      />
      <button type='submit' className={styles['add-btn']}>
        Add
      </button>
    </form>
  );
}
