import { useRef, useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ItemList from './components/ItemList';

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

  return (
    <div className='App'>
      <Header />
      <ItemList items={items} onChangeCheckbox={onChangeCheckbox} />
      <Footer onItemAdd={onItemAdd} />
    </div>
  );
}

export default App;
