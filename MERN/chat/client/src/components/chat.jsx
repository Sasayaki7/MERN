import React, { useEffect, useState } from 'react'
import io from 'socket.io-client';
import styles from './chat.module.css'
import OtherBubble from './otherBubble';
import SelfBubble from './selfbubble';

const Chat = props =>{

    const [socket] = useState(() => io(':8000'));
    const [chat, setChat] = useState([]) // For Sensei bonus, we set an initial condition by 
    const [text, setText] = useState('')

    const {username} = props
    useEffect(()=>{

        console.log("Is this running?");
        if (username!== ''){
            socket.emit('join', username);
        }
        socket.on('chatlog', data=> {console.log('data');setChat(prevChat=> { return data})})
        socket.on('Welcome', data=> console.log(data))
        socket.on('chat', data=> {
            console.log(data)
            setChat(prevChat => {return [...prevChat, data]})
        })

        return () => {
            console.log('dced');
            socket.disconnect(true);
        }
    }, [username])


    const handleChange = e =>{
        setText(e.target.value)
    }


    const handleSubmission = (e) =>{
        e.preventDefault();
        socket.emit('chatClient', {user: username, text: text})
        setText('');
    }

    return(
        <div>
            <div className={styles.chatWindow}>
                {chat.map((msg, idk)=>{

                    return (<div key={idk}>
                        {msg.user === '$SYSTEM$GENERATED$MESSAGE$' ? 
                        <div className={styles.welcome}>
                            {msg.text}
                        </div> :
                        msg.user === username? <SelfBubble text={msg.text}/>:
                        <OtherBubble text={msg.text} person={msg.user}/>
                        }
                        </div>
                        )
                    })
                }
            </div>
            <form onSubmit = {handleSubmission}>
                <textarea name='chat' row={3} col={50} onChange={handleChange} value={text}/>
                <input type="submit" value="Send"/>
            </form>
        </div>
    )
}


export default Chat