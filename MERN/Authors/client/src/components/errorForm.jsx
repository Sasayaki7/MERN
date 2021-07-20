import React from 'react';
import NewAuthorButton from './newAuthorButton';


const ErrorForm = props=>{
    return(
        <div>
            <h2>We could not find the author you requested. Would you like to add this author?</h2>
            <NewAuthorButton/>
        </div>
    )
}


export default ErrorForm