import { useEffect, useRef, useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ItemList from './components/ItemList';
import { Filter } from './types';

function App() {
  const id = useRef(0);
  const [items, setItems] = useState(() => {
    const todos = JSON.parse(localStorage.getItem('todos'));
    return todos ? todos : [];
  });
  const [filter, setFilter] = useState(Filter.all);

  useEffect(() => {
    const todoId = localStorage.getItem('todoId');
    id.current = todoId ? parseInt(todoId) : 0;
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(items));
    localStorage.setItem('todoId', id.current);
  }, [items]);

  const onItemAdd = (title) => {
    setItems((items) => [...items, { id: id.current++, title, isDone: false }]);
  };

  const onChangeCheckbox = (id) => {
    setItems((items) =>
      items.map((item) => {
        if (item.id === id) {
          return { ...item, isDone: !item.isDone };
        }
        return item;
      })
    );
  };

  const onItemDelete = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const onClickFilter = (filter) => {
    setFilter(filter);
  };

  return (
    <div className='App'>
      <Header onClickFilter={onClickFilter} />
      <ItemList
        items={items}
        filter={filter}
        onChangeCheckbox={onChangeCheckbox}
        onItemDelete={onItemDelete}
      />
      <Footer onItemAdd={onItemAdd} />
    </div>
  );
}

export default App;
