import React from 'react';
import Item from './Item';

export default function ItemList({
  items,
  filter,
  onChangeCheckbox,
  onItemDelete,
}) {
  return (
    <ul>
      {items.map((item) => (
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
