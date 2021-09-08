import React, { Suspense } from 'react';
import {
  RelayEnvironmentProvider,
  loadQuery,
} from 'react-relay/hooks';
import PokemonGenerator from './PokemonGenerator.js';
import { RelayEnvironment, PokemonQuery } from './api'
import './App.css';

const preloadedQuery = loadQuery(RelayEnvironment, PokemonQuery);

function App(props) {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={'Loading...'}>
        <div className="App">
          <div className="App-header">
            <PokemonGenerator preloadedQuery={preloadedQuery} />
          </div>
        </div>
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default App;
