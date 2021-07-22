import React from 'react';
import styles from './chat.module.css'


const OtherBubble = props => {
    const {text, person} = props
    
    return(
        <div className={styles.otherRow}>
            <div className={`${styles.bubble} ${styles.otherB}`}>
                <p className={styles.title}>{person} said</p>
                <p className={styles.chat}>{text}</p>
            </div>
        </div>
    )
}


export default OtherBubble