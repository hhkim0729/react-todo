import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { Filter } from '../types';

export default function Item({ item, filter, onChangeCheckbox, onItemDelete }) {
  return (
    <li
      style={
        (filter === Filter.active && item.isDone) ||
        (filter === Filter.completed && !item.isDone)
          ? { display: 'none' }
          : { display: 'block' }
      }
    >
      <input
        type='checkbox'
        onChange={() => onChangeCheckbox(item.id)}
        checked={item.isDone}
      />
      {item.title}
      <button onClick={() => onItemDelete(item.id)}>
        <FaTrashAlt />
      </button>
    </li>
  );
}
