import React from 'react';
import { Filter } from '../types';

export default function Header({ onClickFilter }) {
  const handleClick = ({ target }) => {
    if (target.nodeName === 'BUTTON') {
      onClickFilter(target.innerText);
    }
  };

  return (
    <header onClick={handleClick}>
      <button>{Filter.all}</button>
      <button>{Filter.active}</button>
      <button>{Filter.completed}</button>
    </header>
  );
}
