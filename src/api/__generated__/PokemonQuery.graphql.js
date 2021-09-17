/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type PokemonImage_pokemon$ref = any;
type PokemonStats_pokemon$ref = any;
export type PokemonQueryVariables = {||};
export type PokemonQueryResponse = {|
  +pokemons: ?$ReadOnlyArray<?{|
    +$fragmentRefs: PokemonImage_pokemon$ref & PokemonStats_pokemon$ref
  |}>
|};
export type PokemonQuery = {|
  variables: PokemonQueryVariables,
  response: PokemonQueryResponse,
|};
*/


/*
query PokemonQuery {
  pokemons(first: 151) {
    ...PokemonImage_pokemon
    ...PokemonStats_pokemon
    id
  }
}

fragment PokemonImage_pokemon on Pokemon {
  name
  image
}

fragment PokemonStats_pokemon on Pokemon {
  name
  weight {
    minimum
    maximum
  }
  height {
    minimum
    maximum
  }
  classification
  maxHP
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 151
  }
],
v1 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "minimum",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "maximum",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "PokemonQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Pokemon",
        "kind": "LinkedField",
        "name": "pokemons",
        "plural": true,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "PokemonImage_pokemon"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "PokemonStats_pokemon"
          }
        ],
        "storageKey": "pokemons(first:151)"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "PokemonQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Pokemon",
        "kind": "LinkedField",
        "name": "pokemons",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "image",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "PokemonDimension",
            "kind": "LinkedField",
            "name": "weight",
            "plural": false,
            "selections": (v1/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "PokemonDimension",
            "kind": "LinkedField",
            "name": "height",
            "plural": false,
            "selections": (v1/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "classification",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "maxHP",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": "pokemons(first:151)"
      }
    ]
  },
  "params": {
    "cacheID": "fe2e29c9b89b630a4d6d416a993adac6",
    "id": null,
    "metadata": {},
    "name": "PokemonQuery",
    "operationKind": "query",
    "text": "query PokemonQuery {\n  pokemons(first: 151) {\n    ...PokemonImage_pokemon\n    ...PokemonStats_pokemon\n    id\n  }\n}\n\nfragment PokemonImage_pokemon on Pokemon {\n  name\n  image\n}\n\nfragment PokemonStats_pokemon on Pokemon {\n  name\n  weight {\n    minimum\n    maximum\n  }\n  height {\n    minimum\n    maximum\n  }\n  classification\n  maxHP\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a3d3ee80dd594e52e7f292677534d52b';

module.exports = node;
