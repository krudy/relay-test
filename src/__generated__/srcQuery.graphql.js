/**
 * @flow
 * @relayHash 0858db71d1e24d1bc8c61f641d4dca27
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type srcQueryResponse = {|
  +hello: string;
|};
*/


/*
query srcQuery {
  hello
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "srcQuery",
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "args": null,
        "name": "hello",
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "srcQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "srcQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "args": null,
        "name": "hello",
        "storageKey": null
      }
    ]
  },
  "text": "query srcQuery {\n  hello\n}\n"
};

module.exports = batch;
