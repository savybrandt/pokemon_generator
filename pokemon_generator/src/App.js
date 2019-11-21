import React from 'react';
import { Provider as QueryProvider } from 'urql';
import client from './api/urql';
import PokemonGenerator from './PokemonGenerator.js';
import './App.css';

const App = () => (
  <QueryProvider value={client}>
    <PokemonGenerator />
  </QueryProvider>
);

export default App;
