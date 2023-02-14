import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

export default function Item({ item, onChangeCheckbox }) {
  return (
    <li>
      <input
        type='checkbox'
        onChange={() => onChangeCheckbox(item.id)}
        checked={item.isDone}
      />
      {item.title}
      <button>
        <FaTrashAlt />
      </button>
    </li>
  );
}
