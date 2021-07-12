import React, { useState } from 'react';


const AddTask = props =>{

    const [task, setTask] = useState("")
    const taskInput = document.getElementById('newtask')

    const addTask = () =>{
        let newTaskList = [...props.tasks, {taskName: taskInput.value, completed: false}]
        props.setTask(newTaskList)
        setTask('')
    }

    const changeVal = (event) =>{
        setTask(event.target.value)
    }

    return (
        <div>
            <input type="text" name="taskname" id="newtask" onChange ={changeVal} value={task} />
            <button onClick={addTask}>Add</button>
        </div>
    )
}



export default AddTask;