import React, { useEffect, useState } from 'react';
import AddTodo from './AddTodo';
import Todo from './Todo';
import styles from './TodoList.module.css';

export default function TodoList({ filter }) {
  const [todos, setTodos] = useState(() => {
    const todos = JSON.parse(localStorage.getItem('todos'));
    return todos ? todos : [];
  });

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
    <section className={styles.container}>
      <ul className={styles.list}>
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
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}

function getFilteredTodos(todos, filter) {
  if (filter === 'all') {
    return todos;
  }
  if (filter === 'active') {
    return todos.filter((todo) => !todo.isDone);
  }
  if (filter === 'completed') {
    return todos.filter((todo) => todo.isDone);
  }
}
