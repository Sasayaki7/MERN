import { navigate } from '@reach/router';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AuthorForm from '../components/authorForm';
import styles from '../components/authorstyle.module.css';
import ErrorForm from '../components/errorForm';
import HomeButton from '../components/homeButton';


const EditAuthor = props =>{

    const [formData, setFormData] = useState({name: ''})
    const [errs, setErrs] = useState({})
    const [loaded, setLoaded] = useState(false)

    useEffect(() =>{
        axios.get(`http://localhost:8000/api/authors/${props.id}`)
        .then(resp => {
            if(resp.data){
                setFormData(resp.data)
            }
            else{
                setFormData({})
            }
            setLoaded(true)
        })
        .catch(err=> console.log(err))
    }, [])

    const updateAuthor = formInfo =>{
        axios.put(`http://localhost:8000/api/authors/${props.id}`, formInfo)
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
        {formData.name? <h3 className={styles.subtitle}>Edit this author:</h3> : <ErrorForm/>}
        {loaded && formData.name? <AuthorForm errors = {errs} initialState={formData} callback={updateAuthor}/>:null}
    </div>
    )
}


export default EditAuthor