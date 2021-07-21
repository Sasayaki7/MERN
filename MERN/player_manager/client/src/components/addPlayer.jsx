import axios from 'axios';
import React, { useState } from 'react';
import {Button, Paper, TextField} from '@material-ui/core';
import { navigate } from '@reach/router';

const PlayerForm = props => {

    const [formState, setFormState] = useState({name:'', 
        position: '', 
        status: [{id: 1, activity:'Undecided'},
            {id: 2, activity:'Undecided'},
            {id: 3, activity:'Undecided'}]
        })
    const [errs, setErrs] = useState({})
    const {name, position} = formState;

    const handleChange = e=>{
        setFormState({...formState, [e.target.name]: e.target.value})
    }

    const handleSubmit = e =>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/players/new', formState)
        .then(resp => navigate('/players/list'))
        .catch(err => {
            const {errors} = err.response.data
            let errorObj = {};
            for (let [key, value] of Object.entries(errors)){
                errorObj[key] = value.message;
            }
            setErrs(errorObj);
        })
    }

    return (
        <Paper elevation={5}>
            <h2>Add Player</h2>
            <form onSubmit={handleSubmit}>
                <TextField label="Player Name"
                    value={name}
                    name="name"
                    error={errs.name? true: false}
                    helperText={errs.name}
                    onChange={handleChange}/>
                <TextField label="Player Position"
                    value={position}
                    name="position"
                    error = {errs.position? true: false}
                    helperText={errs.position}
                    onChange={handleChange}/>
                <button className="btn btn-success">Add</button>
            </form>
        </Paper>
    )

}


export default PlayerForm