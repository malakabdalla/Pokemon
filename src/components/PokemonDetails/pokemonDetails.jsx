import React from "react";
import PropTypes from "prop-types";
import "./pokemonDetails.css";

function PokemonInfo({ pokemonData }) {
  return (
    <React.StrictMode>
      <div>
        <p className="pokemonName">{pokemonData.name}</p>
        <img
          className="pokemonPic"
          src={pokemonData.sprites.front_default}
          alt={pokemonData.name}
        />
        <div>
          <p className="ability">Abilities:</p>
          <ul className="pokemonList">
            {pokemonData.abilities.map((ability, index) => (
              <li className="listItem" key={index}>
                {ability.ability.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </React.StrictMode>
  );
}

PokemonInfo.propTypes = {
  pokemonData: PropTypes.object.isRequired,
};

export default PokemonInfo;
