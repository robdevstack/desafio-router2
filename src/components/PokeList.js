import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const PokeList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPokemonList = async () => {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100');
      setPokemonList(response.data.results);
    };

    fetchPokemonList();
  }, []);

  const handlePokemonChange = (event) => {
    setSelectedPokemon(event.target.value);
  };

  const handleViewDetailClick = () => {
    navigate(`/pokemon/${selectedPokemon}`);
  };

  return (
    <div className='container'>
    <div>
      <select value={selectedPokemon} onChange={handlePokemonChange}>
        <option value="">Pokemones</option>
        {pokemonList.map((pokemon) => (
          <option key={pokemon.name} value={pokemon.name}>
            {pokemon.name}
          </option>
        ))}
      </select>
      <button onClick={handleViewDetailClick} disabled={!selectedPokemon}>
        Ver
      </button>
    </div>
    </div>
  );
};

export default PokeList;