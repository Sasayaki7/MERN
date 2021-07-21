import { Router } from '@reach/router';
import React, { useState } from 'react';
import PlayerStatusList from './playerStatusList';
import Selector from './selector';

const StatusManager = props => {

    const {id} = props
    return (
        <div>
            <h1>Player Status: Game {id}</h1>
            <Selector items={[{text: "Game 1", route:'/status/game/1'},
            {text: "Game 2", route:'/status/game/2'},
            {text: "Game 3", route:'/status/game/3'}]}
            default={{text: `Game ${id}`, route:`/status/game/${id}`}}/>
            <PlayerStatusList id={id}/>
        </div>
    )
}


export default StatusManager