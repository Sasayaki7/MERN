import React, {useReducer} from 'react';
import styles from './form.module.css';


const Form = () => {


    const initialState = {
        firstName: {
            value: '',
            error: null
        },
        lastName: {
            value: '',
            error: null
        },
        email: {
            value: '',
            error: null
        }
    };



    const reducer = (state, action)=>{
        if (action.type === 'changeValue'){
            return {...state, [action.payload.key]: {...state[action.payload.key], value: action.payload.value }} 
        }
        else if (action.type === 'changeError'){
            let newState = {...state}
            for (let payload of action.payload){
                newState[payload.key] = {...newState[payload.key], error: payload.error}
            } 
            return newState
        } 
    } 


    const [state, dispatch] = useReducer(reducer, initialState);


    const validateForm = (e) =>{
        e.preventDefault();
        let dispatchObject = [];
        if(state.firstName.value.length < 2){
            dispatchObject.push({key: 'firstName', error: true});
        }
        else{
            dispatchObject.push({key: 'firstName', error: null});
        }
        if(state.lastName.value.length < 2){
            dispatchObject.push({key: 'lastName', error: true});
        }
        else{
            dispatchObject.push({key: 'lastName', error: null});
        }
        if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(state.email.value)){
            dispatchObject.push({key: 'email', error: true});
        }
        else{
            dispatchObject.push({key: 'email', error: null});
        }
        dispatch({type: 'changeError', payload:dispatchObject})
        console.log(state)
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        dispatch({
            type: 'changeValue',
            payload: {key: name, value: value}
        })
        console.log(state)

    }

    return (
        <form onSubmit={validateForm}>
            <div className="input-row">
                <label htmlFor="firstName">First Name</label>
                <input type="text" onChange={handleChange} name="firstName" id="" />
            </div>
            {state.firstName.error? <p className={styles.errorText}>First Name must be at least than 2 characters</p>: null}

            <div className="input-row">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" onChange={handleChange} name="lastName" id="" />
            </div>
            {state.lastName.error? <p className={styles.errorText}>Last Name must be at least than 2 characters</p>: null}

            <div className="input-row">
                <label htmlFor="email">Email</label>
                <input type="text" onChange={handleChange} name="email" id="" />
            </div>
            {state.email.error? <p className={styles.errorText}>Email must be in a valid format</p>: null}


            <input type="submit" value="Submit" />

        </form>
    )
}

export default Form;