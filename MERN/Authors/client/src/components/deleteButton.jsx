import React from 'react';
import axios from 'axios';


const DeleteButton = props => {

    const {id, callback} = props

    const handleClick = (e) =>{
        axios.delete(`http://localhost:8000/api/authors/${id}`)
        .then(response => {
            callback();
        })
        .catch(err=> console.log(err))
    }

    return (
        <button onClick = {handleClick}>Delete</button>
        )
}


export default DeleteButton;