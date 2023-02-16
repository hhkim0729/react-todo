import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { Filter } from '../types';
import styles from './Item.module.css';

export default function Item({ item, filter, onChangeCheckbox, onItemDelete }) {
  return (
    <li
      className={styles.Item}
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
        <span className={item.isDone ? styles.done : ''}>{item.title}</span>
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
