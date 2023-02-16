import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ItemList from './components/ItemList';
import { DarkModeProvider } from './context/DarkModeContext';
import { Filter } from './types';

function App() {
  const [items, setItems] = useState(() => {
    const todos = JSON.parse(localStorage.getItem('todos'));
    return todos ? todos : [];
  });
  const [filter, setFilter] = useState(Filter.all);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(items));
  }, [items]);

  const onAddItem = (item) => {
    setItems((items) => [...items, item]);
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
      <DarkModeProvider>
        <Header filter={filter} onClickFilter={onClickFilter} />
        <ItemList
          items={items}
          filter={filter}
          onChangeCheckbox={onChangeCheckbox}
          onItemDelete={onItemDelete}
        />
        <Footer onAddItem={onAddItem} />
      </DarkModeProvider>
    </div>
  );
}

export default App;
