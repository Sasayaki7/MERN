import React from 'react';
import styles from './box.module.css';


const BoxDisplay = props => {
    return (
        <div className = {styles.flexBox}>
            {console.log(props.boxes)}
            {props.boxes.map((box, idx) => <div className={styles.box} key = {idx} style={{backgroundColor: box.color, height: box.size+'px', width: box.size+'px'}}></div>)}
        </div>
    )
}


export default BoxDisplay;