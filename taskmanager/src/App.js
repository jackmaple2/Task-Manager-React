import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import EnterItem from './components/EnterItem';
import React, { useState } from 'react';
import Tasks from './components/Tasks';

function App() {

  const [tasks, setTasks] = useState({tasks: []});

  const addTask = (task) => {
    let taskList = tasks['tasks'];
    const requestOptions = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task)
    };
    fetch('http://localhost:3000/tasks', requestOptions)
    .then((response) => {
      response.json();
    })
    .then((data) => {
      taskList.push(data);
      setTasks(taskList);
    })
  }

  return (
    <div className="App">
      <Header />
      <EnterItem addTask={addTask} tasks={tasks} setTasks={setTasks} />
      <Tasks tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
