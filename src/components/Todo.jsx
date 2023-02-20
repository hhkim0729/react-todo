import React, { useContext } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { DarkModeContext } from '../context/DarkModeContext';
import { Filter } from '../types';
import styles from './Todo.module.css';

export default function Todo({ item, filter, onUpdate, onDelete }) {
  const { id, text, isDone } = item;
  const { darkMode } = useContext(DarkModeContext);

  return (
    <li
      className={`${styles.Todo} ${darkMode ? styles.dark : ''}`}
      style={
        (filter === Filter.active && isDone) ||
        (filter === Filter.completed && !isDone)
          ? { display: 'none' }
          : { display: 'flex' }
      }
    >
      <div>
        <input
          type='checkbox'
          id={id}
          onChange={() => onUpdate({ ...item, isDone: !isDone })}
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
