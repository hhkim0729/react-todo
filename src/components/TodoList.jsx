import React, { useContext, useEffect, useState } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';
import Footer from './Footer';
import Todo from './Todo';
import './TodoList.css';

export default function TodoList({ filter }) {
  const [items, setItems] = useState(() => {
    const todos = JSON.parse(localStorage.getItem('todos'));
    return todos ? todos : [];
  });
  const { darkMode } = useContext(DarkModeContext);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(items));
  }, [items]);

  const handleAdd = (item) => {
    setItems((items) => [...items, item]);
  };

  const handleUpdate = (updated) => {
    setItems((items) =>
      items.map((item) => (item.id === updated.id ? updated : item))
    );
  };

  const handleDelete = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  return (
    <section>
      <ul className={`TodoList ${darkMode ? 'dark' : ''}`}>
        {items &&
          items.map((item) => (
            <Todo
              item={item}
              key={item.id}
              filter={filter}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          ))}
      </ul>
      <Footer onAdd={handleAdd} />
    </section>
  );
}
