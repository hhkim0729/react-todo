import React, { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { DarkModeContext } from '../context/DarkModeContext';
import styles from './AddTodo.module.css';

export default function AddTodo({ onAdd }) {
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
    onAdd({ id: uuidv4(), text, isDone: false });
    setText('');
  };

  return (
    <form
      className={`${styles.form} ${darkMode ? styles.dark : ''}`}
      onSubmit={handleSubmit}
    >
      <input
        className={styles.input}
        type='text'
        name='todo'
        onChange={handleChangeInput}
        value={text}
        placeholder='Add Todo'
      />
      <button type='submit' className={styles.button}>
        Add
      </button>
    </form>
  );
}
