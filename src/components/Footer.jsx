import React, { useState } from 'react';

export default function Footer({ onItemAdd }) {
  const [title, setTitle] = useState('');

  const onChangeInput = ({ target }) => {
    setTitle(target.value);
  };

  const addItem = () => {
    onItemAdd(title);
    setTitle('');
  };

  const onKeyDownInput = (e) => {
    if (e.key === 'Enter') addItem();
  };

  return (
    <footer>
      <input
        type='text'
        name='todo'
        onChange={onChangeInput}
        onKeyDown={onKeyDownInput}
        value={title}
        placeholder='Add Todo'
      />
      <button onClick={addItem}>Add</button>
    </footer>
  );
}
