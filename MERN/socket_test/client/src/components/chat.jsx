import React, { useEffect, useState } from 'react'
import io from 'socket.io-client';

const Chat = props =>{

    const [socket] = useState(() => io(':8000'));

    useEffect(()=>{

        console.log("Is this running?");
        socket.on('Welcome', data=> console.log(data))

        return () => {console.log('dced');socket.disconnect(true);}
    }, [])

    return(
        <div></div>
    )
}


export default Chat