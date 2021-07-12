import React from 'react';
import styles from './display.module.css'


const Display = (props)=>{


    return (
        <p className={styles.display}>
            {props.content}
        </p>
    )
}


export default Display;