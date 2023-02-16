import React, { useContext, useState } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';
import styles from './Footer.module.css';

export default function Footer({ onItemAdd }) {
  const [title, setTitle] = useState('');
  const { darkMode } = useContext(DarkModeContext);

  const onChangeInput = ({ target }) => {
    setTitle(target.value);
  };

  const addItem = () => {
    onItemAdd(title);
    setTitle('');
  };

  const onKeyDownInput = (e) => {
    if (e.nativeEvent.isComposing) {
      return;
    }
    if (e.key === 'Enter') {
      addItem();
    }
  };

  return (
    <footer className={`${styles.Footer} ${darkMode ? styles.dark : ''}`}>
      <input
        type='text'
        name='todo'
        onChange={onChangeInput}
        onKeyDown={onKeyDownInput}
        value={title}
        placeholder='Add Todo'
      />
      <button className={styles['add-btn']} onClick={addItem}>
        Add
      </button>
    </footer>
  );
}
