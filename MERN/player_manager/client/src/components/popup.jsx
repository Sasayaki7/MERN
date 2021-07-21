import React from 'react';
import styles from './popup.module.css'


const Popup = props =>{

    const {callback, setVisible} = props

    const handleYes = () =>{
        setVisible(false);
        callback();
    }

    const handleNo = () =>{
        setVisible(false);
    }

    return (
        <div className={styles.popup}>
            <p className={styles.midText}>Are you sure you want to delete?</p>
            <div className={styles.buttonRow}>
                <button onClick={e=>handleYes()} className="btn btn-success">Yes</button>
                <button onClick={e=>handleNo()} className="btn btn-danger">No</button>
            </div>
        </div>
    )
}


export default Popup;