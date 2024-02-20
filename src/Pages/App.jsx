import React from "react";
import Header from "../components/Header/Header";
import PokemonSearch from "../Layout/pokemonLayout";
import "./App.css";

function App() {
  return (
    <React.StrictMode>
      <Header />
      <PokemonSearch />
    </React.StrictMode>
  );
}

export default App;
