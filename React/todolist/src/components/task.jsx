import React from 'react'
import styles from './tasks.module.css'


const Task =props =>{

    const {completed, taskName, index} = props

    const deleteTask = () =>{
        let newTask = props.tasks.filter((task, i) => i !== index)
        props.setTask(newTask)
    }

    const checkOff = (event, item) =>{
        let taskPrev = props.tasks.slice(0, index)
        let taskPost = props.tasks.slice(index+1)
        props.setTask([...taskPrev, {taskName: item, completed: event.target.checked}, ...taskPost])
    }

    return (
        <div className={styles.tasks}>
            <p className={`${completed ? styles.strikethrough : ''} ${styles.text}`}>{taskName}</p>
            <input type="checkbox" checked={completed} name="completed" onChange={(event) => checkOff(event, taskName)} id="completedTask" />
            <button className={styles.button} onClick={(event) => deleteTask(taskName)}>Delete</button>
        </div>
    )
}

export default Task;