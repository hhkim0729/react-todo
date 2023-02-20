import React, { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';
import Item from './Item';
import './ItemList.css';

export default function ItemList({ items, filter, onUpdate, onDelete }) {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <ul className={`ItemList ${darkMode ? 'dark' : ''}`}>
      {items &&
        items.map((item) => (
          <Item
            item={item}
            key={item.id}
            filter={filter}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
    </ul>
  );
}
