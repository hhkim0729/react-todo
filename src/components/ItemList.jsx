import React, { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';
import Item from './Item';
import './ItemList.css';

export default function ItemList({
  items,
  filter,
  onChangeCheckbox,
  onItemDelete,
}) {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <ul className={`ItemList ${darkMode ? 'dark' : ''}`}>
      {items &&
        items.map((item) => (
          <Item
            item={item}
            key={item.id}
            filter={filter}
            onChangeCheckbox={onChangeCheckbox}
            onItemDelete={onItemDelete}
          />
        ))}
    </ul>
  );
}
