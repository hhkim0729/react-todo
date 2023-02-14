import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

export default function Item({ item, onChangeCheckbox, onItemDelete }) {
  return (
    <li>
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
