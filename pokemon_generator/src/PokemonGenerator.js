import React from 'react';
import { useQuery } from 'urql';
import { getPokemon } from 'api/getPokemon';

const PokemonGenerator = () => (
  <div className="App">
    <div className="App-header">
      <h1>🤔</h1>
      <p>
        Hmm... Needs more Pokemon
      </p>
    </div>
  </div>
)

export default PokemonGenerator;