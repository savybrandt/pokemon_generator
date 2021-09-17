import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import { useFragment } from 'react-relay/hooks';

const PokemonImageFragment = graphql`
  fragment PokemonImage_pokemon on Pokemon {
    name,
    image
  }
`;

function PokemonImage({ pokemonRef }) {
  const { image, name } = useFragment(PokemonImageFragment, pokemonRef);
  return (
    <img src={image} alt={name} />
  );
}

export { PokemonImage };
