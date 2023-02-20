import React, { useContext } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { DarkModeContext } from '../context/DarkModeContext';
import styles from './Todo.module.css';

export default function Todo({ todo, onUpdate, onDelete }) {
  const { id, text, isDone } = todo;
  const { darkMode } = useContext(DarkModeContext);

  return (
    <li className={`${styles.Todo} ${darkMode ? styles.dark : ''}`}>
      <div>
        <input
          type='checkbox'
          id={id}
          onChange={() => onUpdate({ ...todo, isDone: !isDone })}
          checked={isDone}
        />
        <label htmlFor={id} className={isDone ? styles.done : ''}>
          {text}
        </label>
      </div>
      <button className={styles['delete-btn']} onClick={() => onDelete(id)}>
        <FaTrashAlt />
      </button>
    </li>
  );
}
