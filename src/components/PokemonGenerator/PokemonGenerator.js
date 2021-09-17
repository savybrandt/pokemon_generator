import React, { useState, Suspense } from 'react';
import { usePreloadedQuery } from 'react-relay/hooks';
import { PokemonQuery } from '../../api/'
import { PokemonImage, PokemonStats } from './'

const getRandomIndex = () => Math.floor(Math.random() * 150);

function PokemonGenerator({ preloadedQuery }) {
  const [pokemonNum, setPokemonNum] = useState(getRandomIndex());
  const { pokemons } = usePreloadedQuery(PokemonQuery, preloadedQuery);
  return (
    <>
      <PokemonImage pokemonRef={pokemons[pokemonNum]} />
      <PokemonStats pokemonRef={pokemons[pokemonNum]} />
      <button type="button" onClick={() => setPokemonNum(getRandomIndex())}>New Pokemon!</button>
    </>
  );
}

export { PokemonGenerator };
