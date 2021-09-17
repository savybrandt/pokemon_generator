/* eslint-disable import/prefer-default-export */
import graphql from 'babel-plugin-relay/macro';

export const PokemonQuery = graphql`
  query PokemonQuery {
    pokemons(first: 151) {
      ...PokemonImage_pokemon,
      ...PokemonStats_pokemon,
    }
  }
`;
