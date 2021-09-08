import graphql from 'babel-plugin-relay/macro';

export const PokemonQuery = graphql`
  query PokemonQuery {
    pokemons(first: 151) {
      name
      image
    }
  }
`;
