import React, {useEffect, useState} from 'react';
import PersonForm from '../components/personForm';
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
            <PersonForm/>
        </div>
    )
}