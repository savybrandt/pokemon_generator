import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import { useFragment } from 'react-relay/hooks';

const PokemonStatsFragment = graphql`
  fragment PokemonStats_pokemon on Pokemon {
    name,
    weight {
      minimum,
      maximum
    },
    height{
      minimum,
      maximum
    },
    classification,
    maxHP
  }
`;

function PokemonStats({ pokemonRef }) {
  const {
    name,
    maxHP,
    weight,
    height,
    classification,
  } = useFragment(PokemonStatsFragment, pokemonRef);
  return (
    <div>
      <h1>{name}</h1>
      <ul>
        <li>{`Max HP: ${maxHP}`}</li>
        <li>{`Classification: ${classification}`}</li>
        <li>{`Height: ${height.minimum}-${height.maximum}`}</li>
        <li>{`Weight: ${weight.minimum}-${weight.maximum}`}</li>
      </ul>
    </div>
  );
}

export { PokemonStats };
