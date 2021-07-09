import React, { useState } from  'react';
import styles from './formstyle.module.css'

    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confpassword, setConfPassword] = useState("");  


    
    return(
        <form className = {styles.formOutput}>

            <div className={styles.inputForm}>
                <label>First Name: </label> 
                <input type="text" onChange={ (e) => setFirstName(e.target.value) } />
            </div>
            {(0<firstName.length && firstName.length<2)? (<p className={styles.errorMessage}>First Name must be at least 2 characters</p>): ''}

            <div className={styles.inputForm}>
                <label>Last Name: </label> 
                <input type="text" onChange={ (e) => setLastName(e.target.value) } />
            </div>
            {(0<lastName.length && lastName.length<2)? <p className={styles.errorMessage}>Last Name must be at least 2 characters</p>:''}

            <div className={styles.inputForm}>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            {(0<email.length && email.length<5)? <p className={styles.errorMessage}>Email must be at least 5 characters</p>:''}


            <div className={styles.inputForm}>
                <label>Password: </label>
                <input type="password" onChange={ (e) => setPassword(e.target.value) } />
            </div>
            {(0<password.length && password.length<8)? <p className={styles.errorMessage}>Password must be at least 8 characters</p>:''}
            {(password != confpassword && confpassword.length > 0) ? <p className={styles.errorMessage}>Paswords must match</p>:''}


            <div className={styles.inputForm}>
                <label>Confirm Password: </label>
                <input type="password" onChange={ (e) => setConfPassword(e.target.value) } />
            </div>
        </form>

    );
};
    
export default UserForm;