/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type PokemonImage_pokemon$ref: FragmentReference;
declare export opaque type PokemonImage_pokemon$fragmentType: PokemonImage_pokemon$ref;
export type PokemonImage_pokemon = {|
  +name: ?string,
  +image: ?string,
  +$refType: PokemonImage_pokemon$ref,
|};
export type PokemonImage_pokemon$data = PokemonImage_pokemon;
export type PokemonImage_pokemon$key = {
  +$data?: PokemonImage_pokemon$data,
  +$fragmentRefs: PokemonImage_pokemon$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PokemonImage_pokemon",
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
    }
  ],
  "type": "Pokemon",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = 'c2a6a540c62492c7b6e02326bebe3455';

module.exports = node;
