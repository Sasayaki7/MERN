import { useState } from 'react';
import './App.css';
import Task from './components/task';
import AddTask from './components/addTask';

function App() {

  const [tasks, setTask] = useState([])
  return (
    <div>
      <AddTask tasks ={tasks} setTask = {setTask}/>
      {tasks.map((object, index) => <Task index={index} key={index} setTask={setTask} completed={object.completed} tasks = {tasks} taskName = {object.taskName}/>)}
    </div>
  );
}

export default App;
