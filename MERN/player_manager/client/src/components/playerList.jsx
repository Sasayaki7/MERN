import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Popup from './popup';


const PlayerList = props =>{

    console.log('loading test')
    const [roster, setRoster] = useState([])
    const [reload, setReload] = useState(false)
    const [popup, setPopup] = useState(false)
    const [id, setId] = useState('')
    useEffect(() => {
        axios.get('http://localhost:8000/api/players')
        .then(resp => setRoster(resp.data))
        .catch(err=> console.log('Client Error getting all players', err))
    }, [reload])

    const handleClick = () =>{
        axios.delete(`http://localhost:8000/api/players/${id}`)
        .then(resp => {
            setReload(true)
            setReload(false)
            console.log('Deleted successfully')})
        .catch(err=> console.log('Client Error at delete', err))
    }

    const deleteClick= idx =>{
        setId(idx)
        setPopup(true)
    }

    return (
        <div>
            {popup? <Popup callback={handleClick} setVisible={setPopup}/>: null}
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <td>Team Name</td>
                        <td>Preferred Position</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    { roster.map((player, idx)=>{
                        return (<tr key={idx}>
                            <td>{player.name}</td>
                            <td>{player.position}</td>
                            <td>
                                <button className="btn btn-danger" onClick={e=>deleteClick(player._id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>)
                    }) }
                </tbody>
            </table>
        </div>
    )
}

export default PlayerList