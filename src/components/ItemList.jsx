import React from 'react';
import Item from './Item';

export default function ItemList({ items, onChangeCheckbox, onItemDelete }) {
  return (
    <ul>
      {items.map((item) => (
        <Item
          item={item}
          key={item.id}
          onChangeCheckbox={onChangeCheckbox}
          onItemDelete={onItemDelete}
        />
      ))}
    </ul>
  );
}
