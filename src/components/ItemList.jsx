import React from 'react';
import Item from './Item';

export default function ItemList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </ul>
  );
}
