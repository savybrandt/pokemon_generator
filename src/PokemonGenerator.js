import React, { useState } from 'react';
import { usePreloadedQuery } from 'react-relay/hooks';
import { PokemonQuery } from './api';

const getRandomIndex = () => Math.floor(Math.random()*150)

function PokemonGenerator ({ preloadedQuery }) {
  const [pokemonNum, setPokemonNum] = useState(getRandomIndex())
  const data = usePreloadedQuery(PokemonQuery, preloadedQuery);
  const pokemons = data ? data.pokemons : null;
  const pokemon = pokemons[pokemonNum];
  
  if (pokemon) {
    return (
      <>
        <h1>{pokemon.name}</h1>
        <img alt={pokemon.name} src={pokemon.image}/>
        <button onClick={() => setPokemonNum(getRandomIndex())}>New Pokemon!</button>
      </>
    )
  }
}

export default PokemonGenerator;