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

  const handleAddItem = (item) => {
    setItems((items) => [...items, item]);
  };

  const handleUpdateItem = (updated) => {
    setItems((items) =>
      items.map((item) => (item.id === updated.id ? updated : item))
    );
  };

  const handleDeleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleClickFilter = (filter) => {
    setFilter(filter);
  };

  return (
    <div className='App'>
      <DarkModeProvider>
        <Header filter={filter} onClickFilter={handleClickFilter} />
        <ItemList
          items={items}
          filter={filter}
          onUpdate={handleUpdateItem}
          onDelete={handleDeleteItem}
        />
        <Footer onAdd={handleAddItem} />
      </DarkModeProvider>
    </div>
  );
}

export default App;
