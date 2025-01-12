import React from "react";

const colours = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
};

export const PokemonCards = ({ pokemonData }) => {
  const getBackgroundColor = () => {
    const type = pokemonData.types[0]?.type?.name; 
    return colours[type] || "#ccc";
  };

  return (
    <div className="container">
      <li className="pokemon-card">
        <figure>
          <img
            src={pokemonData.sprites.other.dream_world.front_default}
            alt={pokemonData.name}
            className="pokemon-image"
          />
        </figure>
        <h1 className="pokemon-name">{pokemonData.name}</h1>
        <div
          className="pokemon-info pokemon-highlight"
          style={{
            backgroundColor: getBackgroundColor(),
            color: "#fff",
            padding: "0.6rem 2.4rem",
            borderRadius: "20rem",
            fontWeight: "bold",
            textTransform: "capitalize",
          }}
        >
          <p>
            {pokemonData.types.map((curType) => curType.type.name).join(", ")}
          </p>
        </div>

        <div className="grid-three-cols">
          <p className="pokemon-info">
            <span> Height:</span> {pokemonData.height}
          </p>
          <p className="pokemon-info">
            <span> Weight:</span> {pokemonData.weight}
          </p>
          <p className="pokemon-info">
            <span> Speed:</span> {pokemonData.stats[5].base_stat}
          </p>
        </div>

        <div className="grid-three-cols">
          <div className="pokemon-info">
            <p>{pokemonData.base_experience}</p>
            <span> Experience:</span>
          </div>
          <div className="pokemon-info">
            <p>{pokemonData.stats[1].base_stat}</p>
            <span>Attack:</span>
          </div>
          <div className="pokemon-info">
            <p>
              {pokemonData.abilities
                .map((abilityInfo) => abilityInfo.ability.name)
                .slice(0, 1)
                .join(", ")}
            </p>
            <span> Abilities: </span>
          </div>
        </div>
      </li>
    </div>
  );
};
