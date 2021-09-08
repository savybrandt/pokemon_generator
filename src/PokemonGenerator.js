import React from 'react';
import { usePreloadedQuery } from 'react-relay/hooks';
import { PokemonQuery } from './api';

function PokemonGenerator ({ preloadedQuery }) {
  const data = usePreloadedQuery(PokemonQuery, preloadedQuery);
  const pokemons = data ? data.pokemons : null;
  const pokemon = pokemons ? pokemons[0] : {};
  
  return (
    <>
      <h1>{pokemon.name}</h1>
      <img alt={pokemon.name} src={pokemon.image}/>
    </>
  )
}

export default PokemonGenerator;