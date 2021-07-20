import { navigate } from '@reach/router';
import axios from 'axios';
import React, { useState } from 'react';
import AuthorForm from '../components/authorForm';
import styles from '../components/authorstyle.module.css';
import HomeButton from '../components/homeButton';


const NewAuthor = props =>{

    const [errs, setErrs] = useState({})
    const submitNew = formInfo =>{
        axios.post('http://localhost:8000/api/authors/new', formInfo)
        .then(resp => navigate('/'))
        .catch(err => {
            const {errors} = err.response.data
            let errObj = {};
            for(let [key, value] of Object.entries(errors)){
                errObj[key] = value.message
            }
            setErrs(errObj)
        })
    }

    return (
    <div>
        <HomeButton/>
        <h3 className={styles.subtitle}>Add a new author:</h3>
        <AuthorForm errors = {errs} initialState={{name: ''}} callback={submitNew}/>
    </div>
    )
}


export default NewAuthor