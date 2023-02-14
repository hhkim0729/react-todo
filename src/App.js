import { useRef, useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ItemList from './components/ItemList';
import { Filter } from './types';

function App() {
  const id = useRef(3);
  const [items, setItems] = useState([
    {
      id: 0,
      title: '공부하기',
      isDone: false,
    },
    {
      id: 1,
      title: '밥먹기',
      isDone: true,
    },
    {
      id: 2,
      title: '강의 보기',
      isDone: false,
    },
  ]);
  const [filter, setFilter] = useState(Filter.all);

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
