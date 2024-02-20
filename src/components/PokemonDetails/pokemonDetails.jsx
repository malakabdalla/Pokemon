import React, { useState, useEffect } from 'react';

function PokemonDetails({ pokemonName }) {
  const [pokemonData, setPokemonData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Pokemon not found!');
        }
        return response.json();
      })
      .then(data => {
        setPokemonData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching Pokemon:', error);
        setLoading(false);
      });
  }, [pokemonName]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!pokemonData) {
    return <div>No pokemon yet, please submit a pokemon!</div>;
  }

  return (
    <div>
      <h2>{pokemonData.name}</h2>
      <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
      <div>
        <strong>Abilities:</strong>
        <ul>
          {pokemonData.abilities.map((ability, index) => (
            <li key={index}>{ability.ability.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PokemonDetails;