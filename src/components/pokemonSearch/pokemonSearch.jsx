import React, { useState } from 'react';
import PokemonDetails from '../PokemonDetails/pokemonDetails';

function PokemonSearch() {
  const [pokemonName, setPokemonName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (pokemonName.trim()) {
      setPokemonName(pokemonName.trim());
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Pokemon Name:
          <input type="text" value={pokemonName} onChange={(e) => setPokemonName(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {pokemonName.trim() && <PokemonDetails pokemonName={pokemonName} />}
    </div>
  );
}

export default PokemonSearch;