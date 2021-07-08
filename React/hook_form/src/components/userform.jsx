import React, { useState } from  'react';
import styles from './formstyle.module.css'

    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confpassword, setConfPassword] = useState("");  


    
    return(
        <>
        <form className = {styles.formOutput}>
            <div className={styles.inputForm}>
                <label>First Name: </label> 
                <input type="text" onChange={ (e) => setFirstName(e.target.value) } />
            </div>
            <div className={styles.inputForm}>
                <label>Last Name: </label> 
                <input type="text" onChange={ (e) => setLastName(e.target.value) } />
            </div>
            <div className={styles.inputForm}>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div className={styles.inputForm}>
                <label>Password: </label>
                <input type="password" onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div className={styles.inputForm}>
                <label>Confirm Password: </label>
                <input type="password" onChange={ (e) => setConfPassword(e.target.value) } />
            </div>
        </form>
        <div className={styles.formDisplay}>
            <h2>Your Form Data</h2>
            <div className={styles.formDataDisplay}>
                <p className={styles.label}>First Name</p>
                <p>{firstName}</p>
            </div>
            <div className={styles.formDataDisplay}>
                <p className={styles.label}>Last Name:</p>
                <p>{lastName}</p>
            </div>
            <div className={styles.formDataDisplay}>
                <p className={styles.label}>Email:</p>
                <p>{email}</p>
            </div>
            <div className={styles.formDataDisplay}>
                <p className={styles.label}>Password:</p>
                <p>{password}</p>
            </div>
            <div className={styles.formDataDisplay}>
                <p className={styles.label}>Confirm Password:</p>
                <p>{confpassword}</p>
            </div>
        </div>
        </>
    );
};
    
export default UserForm;