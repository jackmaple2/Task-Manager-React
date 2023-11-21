import './App.css';
import Header from './components/Header';
import EnterItem from './components/EnterItem';
import React, { useEffect, useState } from 'react';
import Tasks from './components/Tasks';

function App() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/tasks')
    .then((response) => response.json())
    .then((data) => {
      setTasks(data)
    })
  }, [])

  const addTask = (task) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task)
    };
    fetch('http://localhost:3000/tasks', requestOptions)
    .then((response) => response.json())
    .then((data) => {
      setTasks((prevTask) => [...prevTask, data]);
    })
  }

  return (
    <div className="App">
      <Header />
      <EnterItem addTask={addTask} />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
