import React, { useContext } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { DarkModeContext } from '../context/DarkModeContext';
import styles from './Todo.module.css';

export default function Todo({ todo, onUpdate, onDelete }) {
  const { id, text, isDone } = todo;
  const { darkMode } = useContext(DarkModeContext);

  return (
    <li className={`${styles.todo} ${darkMode ? styles.dark : ''}`}>
      <div>
        <input
          className={styles.checkbox}
          type='checkbox'
          id={id}
          onChange={() => onUpdate({ ...todo, isDone: !isDone })}
          checked={isDone}
        />
        <label
          className={`${styles.text} ${isDone ? styles.done : ''}`}
          htmlFor={id}
        >
          {text}
        </label>
      </div>
      <span className={styles.icon}>
        <button className={styles.button} onClick={() => onDelete(id)}>
          <FaTrashAlt />
        </button>
      </span>
    </li>
  );
}
