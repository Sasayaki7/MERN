import axios from 'axios';
import React, { useEffect, useState } from 'react'
import StatusSelector from './statusSelector';

const PlayerStatusList = props =>{
    const {id} = props
    const [statusList, setStatusList] = useState([]);
    
    useEffect(() =>{
        axios.get('http://localhost:8000/api/players/')
        .then(resp => setStatusList(resp.data))
        .catch(err=> console.log(err))
    }, [])

    const changeStatus = (player, newStatus) =>{
        axios.put(`http://localhost:8000/api/players/${player}/status`, {game: id, status: newStatus})
        .then(resp => {
            const playerId = resp.data._id;
            console.log(resp.data)
            let playerIndex = 0;
            for (let i = 0; i < statusList.length; i++){
                if (statusList[i]._id === playerId){
                    playerIndex = i;
                    break
                }
            }
            setStatusList([...statusList.slice(0, playerIndex), resp.data, ...statusList.slice(playerIndex+1)])
        })
        .catch(err=> console.log(err))
    }
    

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td>Player Name</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {statusList.map((player, idx) =>{
                    console.log(id-1)
                    const {activity} = player.status[id-1]
                    return <tr key={idx}>
                            <td>{player.name}</td>
                            <td>
                                <button onClick={() => changeStatus(player._id, "Playing")} className={activity==="Playing"? "btn btn-success": "btn"}>Playing</button>
                                <button onClick={() => changeStatus(player._id, "Not Playing")} className={activity==="Not Playing"? "btn btn-danger": "btn"}>Not Playing</button>
                                <button onClick={() => changeStatus(player._id, "Undecided")} className={activity==="Undecided"? "btn btn-warning": "btn"}>Undecided</button>
                                
                                {/* <StatusSelector 
                                initial={player.status[id-1].activity}
                                callback={changeStatus}
                                player={player._id}/>  */}
                                </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}


export default PlayerStatusList