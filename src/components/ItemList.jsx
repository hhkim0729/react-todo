import React from 'react';
import Item from './Item';
import './ItemList.css';

export default function ItemList({
  items,
  filter,
  onChangeCheckbox,
  onItemDelete,
}) {
  return (
    <ul className='ItemList'>
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
