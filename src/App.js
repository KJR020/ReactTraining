import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import Jumbotron from './components/Jumbotron';

function App() {
  return (
    <div className="App">
      <Jumbotron />
      <h1>Todo App</h1>
      <TodoList />
    </div>
  );
}

export default App;
