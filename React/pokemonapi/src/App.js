import axios from 'axios';
import './App.css';
import React, {useEffect, useState} from 'react';

function App() {
  const [pokemons, setPokemons] = useState([]);
  
  const [clicked, setClicked] = useState(false);
  useEffect(() =>{
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=1020')
      .then(response => setPokemons(response.data.results))
  }, [clicked])

  const clickButton = () =>{
    setClicked(true);
  }

  return (
    <div>
      <button onClick={clickButton}>Fetch Pokemon</button><ol>
      {clicked?pokemons.map((pokemon)=> <li>{pokemon.name}</li>):null}
      </ol>
    </div>
  );
}

export default App;
