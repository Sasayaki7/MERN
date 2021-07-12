import React, {useState} from 'react';
import styles from './tabs.module.css'


const Tab = (props)=>{

    const [tab, setTab] = useState(null);



    const setTabContent = (event, i) =>{
        props.setTabContent(i.content);
        if(tab){
            tab.classList.remove(styles.selected)
        }
        event.target.classList.add(styles.selected);
        setTab(event.target);

    }

    return (
        <div>
            {props.tab.map((tab, idx) => <button className = {styles.tab} key={idx} onClick={(event) => setTabContent(event, tab)}>{tab.label}</button>)}
        </div>
    )
}


export default Tab;