import React, {useEffect, useState} from 'react';

import axios from 'axios';

export default () =>{
    const [message, setMessage] = useState("Loading...");

    useEffect(() =>{
        axios.get('http://localhost:8000/api')
        .then(response => {
            setMessage(response.data.message)
        })
        .catch(err=> console.log(err))
    }, [])

    return(
        <div>
            <h2> Message from the backend: {message}</h2>
        </div>
    )
}