/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type PokemonStats_pokemon$ref: FragmentReference;
declare export opaque type PokemonStats_pokemon$fragmentType: PokemonStats_pokemon$ref;
export type PokemonStats_pokemon = {|
  +name: ?string,
  +weight: ?{|
    +minimum: ?string,
    +maximum: ?string,
  |},
  +height: ?{|
    +minimum: ?string,
    +maximum: ?string,
  |},
  +classification: ?string,
  +maxHP: ?number,
  +$refType: PokemonStats_pokemon$ref,
|};
export type PokemonStats_pokemon$data = PokemonStats_pokemon;
export type PokemonStats_pokemon$key = {
  +$data?: PokemonStats_pokemon$data,
  +$fragmentRefs: PokemonStats_pokemon$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = [
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
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PokemonStats_pokemon",
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
      "concreteType": "PokemonDimension",
      "kind": "LinkedField",
      "name": "weight",
      "plural": false,
      "selections": (v0/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "PokemonDimension",
      "kind": "LinkedField",
      "name": "height",
      "plural": false,
      "selections": (v0/*: any*/),
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
    }
  ],
  "type": "Pokemon",
  "abstractKey": null
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd1e7a63be3ad5234c27260f77b27637d';

module.exports = node;
