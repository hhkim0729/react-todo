import React, { useContext } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { DarkModeContext } from '../context/DarkModeContext';
import { Filter } from '../types';
import styles from './Item.module.css';

export default function Item({ item, filter, onChangeCheckbox, onItemDelete }) {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <li
      className={`${styles.Item} ${darkMode ? styles.dark : ''}`}
      style={
        (filter === Filter.active && item.isDone) ||
        (filter === Filter.completed && !item.isDone)
          ? { display: 'none' }
          : { display: 'flex' }
      }
    >
      <div>
        <input
          type='checkbox'
          onChange={() => onChangeCheckbox(item.id)}
          checked={item.isDone}
        />
        <span className={item.isDone ? styles.done : ''}>{item.text}</span>
      </div>
      <button
        className={styles['delete-btn']}
        onClick={() => onItemDelete(item.id)}
      >
        <FaTrashAlt />
      </button>
    </li>
  );
}
