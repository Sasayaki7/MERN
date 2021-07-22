import React, { useState } from 'react';
import {Link, navigate} from '@reach/router';
import styles from './playermanager.module.css';

const Selector = props => {

    const {items} = props
    const [selected, setSelected] = useState(props.default? props.default: {})
    return (
        <div className={styles.selector}>
            {
            items.map((obj, idx) =>{
                    return <div className={styles.straightener} key={idx}>
                        <Link onClick = {() => setSelected(obj.text)} to={obj.route}>
                        {selected === obj.text ? <b>{obj.text}</b>: obj.text}
                    </Link>
                    { idx!==items.length-1 && <p>|</p> }
                    </div>
                })
            }
        </div>
    )
}


export default Selector;