import React from 'react';
import styles from './chat.module.css'


const SelfBubble = props => {
    const {text} = props
    
    return(
        <div className={styles.selfRow}>
            <div className={`${styles.bubble} ${styles.selfB}`}>
                <p className={styles.title}>You said</p>
                <p className={styles.chat}>{text}</p>
            </div>
        </div>
    )
}


export default SelfBubble