import React from 'react';


const WordColor = props =>{

    const {word, forecolor, backcolor} = props

    return (
        <p style={{color: forecolor, backgroundColor: backcolor}}>{word}</p>
    )
}


export default WordColor;