import React from 'react';
import { usePreloadedQuery } from 'react-relay/hooks';
import { PokemonQuery } from './api';

const getRandomIndex = () => Math.floor(Math.random()*150)

function PokemonGenerator ({ preloadedQuery }) {
  const data = usePreloadedQuery(PokemonQuery, preloadedQuery);
  const pokemons = data ? data.pokemons : null;
  const pokemon = pokemons[getRandomIndex()];
  
  if (pokemon) {
    return (
      <>
        <h1>{pokemon.name}</h1>
        <img alt={pokemon.name} src={pokemon.image}/>
      </>
    )
  }
}

export default PokemonGenerator;