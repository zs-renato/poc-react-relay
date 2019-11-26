/**
 * @flow
 * @relayHash e692a5d0c091e543f55d52362a2529ad
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteCountryInput = {|
  id: string,
  clientMutationId: string,
|};
export type DeleteCountryMutationVariables = {|
  input: DeleteCountryInput
|};
export type DeleteCountryMutationResponse = {|
  +deleteCountry: ?{|
    +deletedId: ?string
  |}
|};
export type DeleteCountryMutation = {|
  variables: DeleteCountryMutationVariables,
  response: DeleteCountryMutationResponse,
|};
*/


/*
mutation DeleteCountryMutation(
  $input: DeleteCountryInput!
) {
  deleteCountry(input: $input) {
    deletedId
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "DeleteCountryInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "deleteCountry",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "DeleteCountryPayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "deletedId",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "DeleteCountryMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "DeleteCountryMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "DeleteCountryMutation",
    "id": null,
    "text": "mutation DeleteCountryMutation(\n  $input: DeleteCountryInput!\n) {\n  deleteCountry(input: $input) {\n    deletedId\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '96faff38c5e5fd2182038ba22d5426ae';
module.exports = node;
