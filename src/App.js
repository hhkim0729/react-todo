import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import TodoList from './components/TodoList';
import { DarkModeProvider } from './context/DarkModeContext';

const filters = ['All', 'Active', 'Completed'];

function App() {
  const [filter, setFilter] = useState(filters[0]);

  return (
    <div className='App'>
      <DarkModeProvider>
        <Header filters={filters} filter={filter} onFilterChange={setFilter} />
        <TodoList filter={filter} />
      </DarkModeProvider>
    </div>
  );
}

export default App;
