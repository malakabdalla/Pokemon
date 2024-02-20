import React, { useState } from "react";
import PropTypes from "prop-types";
import "./pokemonSearch.css";

function PokemonSearchForm({ onSubmit }) {
  const [pokemonName, setPokemonName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(pokemonName.trim());
  };

  return (
    <React.StrictMode>
      <form onSubmit={handleSubmit}>
        <label className="label">Enter To Mine:</label>
        <br></br>
        <input
          className="inputField"
          placeholder="Pokemon Name"
          id="item"
          type="text"
          value={pokemonName}
          onChange={(e) => setPokemonName(e.target.value)}
        />

        <button type="submit" className="submit-btn">
          Mine
        </button>
      </form>
    </React.StrictMode>
  );
}
PokemonSearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default PokemonSearchForm;
