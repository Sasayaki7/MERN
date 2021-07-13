import React, {useState} from 'react';
import {navigate} from '@reach/router';


const Form = props =>{
    


    const [parameter, setParameter] = useState({category: 'planets', id: 1})
    const handleChange = e =>{
        setParameter({...parameter, [e.target.name]: e.target.value})
    }

    const handleSubmit = e =>{
        e.preventDefault();
        console.log(`/${parameter.category}/${parameter.id}`)
        navigate(`/${parameter.category}/${parameter.id}`);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="category">Search for: </label>
                <select onChange= {handleChange} name="category" id="">
                    <option value="planets">planets</option>
                    <option value="people">people</option>
                </select>
                <label htmlFor="id">ID: </label>
                <input type="number" onChange= {handleChange} name="id" id="" min="0" value={parameter.id}/>
                <input className = 'btn btn-primary' type="submit" value="Search" />
            </form>
        </div>
    )
}


export default Form;