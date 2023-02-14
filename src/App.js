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
      isActive: true,
    },
    {
      id: 1,
      title: '밥먹기',
      isActive: false,
    },
    {
      id: 2,
      title: '강의 보기',
      isActive: true,
    },
  ]);

  const onItemAdd = (title) => {
    setItems((items) => [
      ...items,
      { id: id.current++, title, isActive: true },
    ]);
  };

  return (
    <div className='App'>
      <Header />
      <ItemList items={items} />
      <Footer onItemAdd={onItemAdd} />
    </div>
  );
}

export default App;
