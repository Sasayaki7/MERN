import React, { useState } from 'react';

const StatusSelector = props =>{
    const {initial, callback, player} = props;
    const [state, setState] = useState(initial)
    console.log(initial)

    const handleClick= param =>{
        setState(param);
        callback(player, param);
    }

    return (
        <div>
            <button onClick={() => handleClick("Playing")} className={state==="Playing"? "btn btn-success": "btn"}>Playing</button>
            <button onClick={() => handleClick("Not Playing")} className={state==="Not Playing"? "btn btn-danger": "btn"}>Not Playing</button>
            <button onClick={() => handleClick("Undecided")} className={state==="Undecided"? "btn btn-warning": "btn"}>Undecided</button>
        </div>
    )
}


export default StatusSelector