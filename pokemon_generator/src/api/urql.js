import { createClient } from 'urql';

const client = createClient({
  url: 'https://graphql-pokemon.now.sh/',
});

export default client;

