import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import TodoList from './components/TodoList';
import { DarkModeProvider } from './context/DarkModeContext';
import { Filter } from './types';

function App() {
  const [filter, setFilter] = useState(Filter.all);

  const handleClickFilter = (filter) => {
    setFilter(filter);
  };

  return (
    <div className='App'>
      <DarkModeProvider>
        <Header filter={filter} onClickFilter={handleClickFilter} />
        <TodoList filter={filter} />
      </DarkModeProvider>
    </div>
  );
}

export default App;
