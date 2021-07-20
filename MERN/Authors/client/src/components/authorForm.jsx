import React, { useState } from 'react';
import {Paper, FormControl, Button, TextField} from '@material-ui/core';
import { navigate } from '@reach/router';
import axios from 'axios';


const AuthorForm = props => {

    const {initialState, callback, errors} = props
    const [formState, setFormState] = useState(initialState);
    const {name} = formState;


    const handleSubmit = (e) => {
        e.preventDefault();
        callback(formState);
    }

    const handleChange = e =>{
        setFormState({...formState, [e.target.name]: e.target.value})
    }
    return (
        <div>
            <Paper elevation={3}>
                <form onSubmit={handleSubmit}>
                    <TextField label="Name"
                        value="" 
                        name="name"
                        value={name}
                        error={errors.name? true: false}
                        helperText={errors.name}
                        onChange={handleChange}/>
                    <br/>
                    <br/>
                    <Button type="cancel" variant="contained" color="primary" onClick={()=> navigate('/')}>
                        Cancel
                    </Button>
                    <Button type="submit" variant="contained" color="primary">
                        Submit
                    </Button>
                </form>
                <br/>
            </Paper>
        </div>
    )
}



export default AuthorForm