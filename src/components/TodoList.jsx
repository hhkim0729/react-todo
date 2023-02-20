import React, { useContext, useEffect, useState } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';
import Footer from './Footer';
import Todo from './Todo';
import './TodoList.css';

export default function TodoList({ filter }) {
  const [todos, setTodos] = useState(() => {
    const todos = JSON.parse(localStorage.getItem('todos'));
    return todos ? todos : [];
  });
  const { darkMode } = useContext(DarkModeContext);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAdd = (todo) => {
    setTodos((todos) => [...todos, todo]);
  };

  const handleUpdate = (updated) => {
    setTodos((todos) =>
      todos.map((todo) => (todo.id === updated.id ? updated : todo))
    );
  };

  const handleDelete = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const filtered = getFilteredTodos(todos, filter);

  return (
    <section>
      <ul className={`TodoList ${darkMode ? 'dark' : ''}`}>
        {filtered &&
          filtered.map((todo) => (
            <Todo
              todo={todo}
              key={todo.id}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          ))}
      </ul>
      <Footer onAdd={handleAdd} />
    </section>
  );
}

function getFilteredTodos(todos, filter) {
  if (filter === 'All') {
    return todos;
  }
  if (filter === 'Active') {
    return todos.filter((todo) => !todo.isDone);
  }
  if (filter === 'Completed') {
    return todos.filter((todo) => todo.isDone);
  }
}
