import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PokemonDetail = () => {
  const { pokemonName } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemonDetail = async () => {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      setPokemon(response.data);
    };

    fetchPokemonDetail();
  }, [pokemonName]);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <div className='container'> 
      <div>
        <h2>{pokemon.name}</h2>
        <img className='imagen' src={pokemon.sprites.front_default} alt={pokemon.name} />
        <p>HP: {pokemon.stats[0].base_stat}</p>
        <p>Attack: {pokemon.stats[1].base_stat}</p>
        <p>Defense: {pokemon.stats[2].base_stat}</p>
        <p>Special Attack: {pokemon.stats[3].base_stat}</p>
        <p>Speed: {pokemon.stats[5].base_stat}</p>
      </div>
    </div>
  );
};

export default PokemonDetail;