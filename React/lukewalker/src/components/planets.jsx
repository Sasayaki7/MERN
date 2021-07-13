import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';

const Planet = props =>{

    const {id} = props

    const [planet, setPlanet] = useState(null)

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/planets/${id}`)
        .then(response => {console.log(response.data);
            setPlanet(response.data)})
        .catch(() => navigate('/error'))
    }, [props])

    return (
        <div>
            <h1>{planet? planet.name: ''}</h1>
            <br/>
            <p><b>Climate:</b> {planet? planet.climate: ''}cm</p>
            <p><b>Terrain:</b> {planet? planet.terrain: ''}kg</p>
            <p><b>Surface Water:</b> {planet? planet.surface_water: ''}</p>
            <p><b>Population:</b> {planet? planet.population: ''}</p>
        </div>
    )
}

export default Planet