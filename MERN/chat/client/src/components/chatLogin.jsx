import React, { useState } from 'react';
import {Button,  TextField} from '@material-ui/core'
import styles from './chat.module.css'

const ChatLogin = props =>{

    const [input, setInput] = useState('')
    const {setUsername} = props

    const handleChange = e =>{
        console.log(input)
        setInput(e.target.value)
    }

    const submitHandler = e =>{
        console.log('yes')
        e.preventDefault();
        setUsername(input)
    }


    return (
        <div>
            <h1>Get Started Right Now!</h1>
            <p>I want to start chatting with the name...</p>
            <form onSubmit={submitHandler}>
                <div className={styles.inputRow}></div>
                <TextField
                name='input-user'
                onChange={handleChange}
                value={input}
                />
                <button>Start Chatting</button>
            </form>
        </div>
    )
}


export default ChatLogin;