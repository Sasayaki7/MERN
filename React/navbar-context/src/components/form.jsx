import React, {useContext} from 'react';
import NameContext from '../context/namecontext';


const Form = props =>{
    const {name, setName} = useContext(NameContext);

    const handleName = e =>{
        setName(e.target.value);
    }
    return (
        <div>
            <p>Your Name:</p>
            <input type="text" onChange={handleName} name="name" id=""/>
        </div>
    )
}


export default Form