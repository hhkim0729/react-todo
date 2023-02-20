import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './AddTodo.module.css';

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState('');

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
    <form className={styles.form} onSubmit={handleSubmit}>
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
