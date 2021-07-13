import React from 'react';


const Number = props =>{

    return (
        <p>{isNaN(props.id)?`The Word is: ${props.id}`:`The number is: ${props.id}` }</p>
    )
}


export default Number;