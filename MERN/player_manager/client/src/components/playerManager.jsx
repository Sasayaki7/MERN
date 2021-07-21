import React from 'react';

import Selector from './selector';



const PlayerManager = props => {

    return (
        <div>
            <Selector items={[
                {text: 'List', route: '/players/list'},
                {text: 'Add Player', route: '/players/addplayer'}
            ]}/>
            {props.children}
        </div>
    )
}


export default PlayerManager;