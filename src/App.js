import React, { Suspense } from 'react';
import {
  RelayEnvironmentProvider,
  loadQuery,
} from 'react-relay/hooks';
import { PokemonGenerator } from './components/PokemonGenerator/';
import { RelayEnvironment, PokemonQuery } from './api'
import './App.css';

function App() {
  const preloadedQuery = loadQuery(RelayEnvironment, PokemonQuery);
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <div className="App">
        <div className="App-header">
          <Suspense fallback="App Loading...">
            <PokemonGenerator preloadedQuery={preloadedQuery} />
          </Suspense>
        </div>
      </div>
    </RelayEnvironmentProvider>
  );
}

export default App;
