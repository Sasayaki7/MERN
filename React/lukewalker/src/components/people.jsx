import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {navigate, Link} from '@reach/router';


const People = props =>{

    const {id} = props

    const [people, setPeople] = useState(null)

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/people/${id}`)
        .then(response => 
            {axios.get(response.data.homeworld)
                .then(resp2 => {
                    setPeople({...response.data, homeworld: resp2.data.name, homeworldLink: `/planets/${response.data.homeworld.match(/[0-9]+/)[0]}`})
                })
            })
        .catch(() => navigate('/error'))
    }, [props])

    return (
        <div>
            <h1>{ people? people.name: '' }</h1>
            <br/>
            <p><b>Height:</b> {people? people.height: ''}cm</p>
            <p><b>Mass:</b> {people? people.mass: ''}kg</p>
            <p><b>Hair Color:</b> { people? people.hair_color: ''}</p>
            <p><b>Skin Color:</b> {people? people.skin_color: ''}</p>
            <p><b>Homeworld: </b> { people? <Link to={ people.homeworldLink }>{people.homeworld}</Link>: ''}</p>
        </div>
    )
}

export default People