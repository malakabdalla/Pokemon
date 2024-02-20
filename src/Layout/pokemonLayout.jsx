// PokemonSearch.js
import React, { useState } from "react";
import PokemonSearchForm from "../components/pokemonSearch/pokemonSearch";
import PokemonInfo from "../components/PokemonDetails/pokemonDetails";
import "./layout.css";

function PokemonSearch() {
  const [pokemonData, setPokemonData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (pokemonName) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`
      );
      if (!response.ok) {
        throw new Error("Pokemon not found!");
      }
      const data = await response.json();
      setPokemonData(data);
      setLoading(false);
    } catch (error) {
      setError("Error fetching Pokemon: " + error.message);
      setLoading(false);
    }
  };

  return (
    <React.StrictMode>
      <PokemonSearchForm onSubmit={handleSearch} />
      {loading && (
        <div className="loading">
          <span>Mining In Process.......</span>
        </div>
      )}
      {error && <div className="error">{error}</div>}
      {pokemonData && !loading && !error && (
        <PokemonInfo pokemonData={pokemonData} />
      )}
    </React.StrictMode>
  );
}

export default PokemonSearch;
