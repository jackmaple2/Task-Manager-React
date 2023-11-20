import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import EnterItem from './components/EnterItem';
import React, { useState } from 'react';
import Tasks from './components/Tasks';

function App() {

  const [tasks, setTasks] = useState('');

  return (
    <div className="App">
      <Header />
      <EnterItem tasks={tasks} setTasks={setTasks} />
      <Tasks tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
