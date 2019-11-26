/**
 * @flow
 * @relayHash 9ddf894382eb0abce6a41486f48a7cf6
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateCountryInput = {|
  code: string,
  name: string,
  languagesIds?: ?$ReadOnlyArray<string>,
  languages?: ?$ReadOnlyArray<CountrylanguagesLanguage>,
  clientMutationId: string,
|};
export type CountrylanguagesLanguage = {|
  code: string,
  name: string,
  countriesIds?: ?$ReadOnlyArray<string>,
  countries?: ?$ReadOnlyArray<LanguagecountriesCountry>,
|};
export type LanguagecountriesCountry = {|
  code: string,
  name: string,
  languagesIds?: ?$ReadOnlyArray<string>,
  languages?: ?$ReadOnlyArray<CountrylanguagesLanguage>,
|};
export type CreateCountryMutationVariables = {|
  input: CreateCountryInput
|};
export type CreateCountryMutationResponse = {|
  +createCountry: ?{|
    +edge: ?{|
      +node: {|
        +id: string,
        +name: string,
        +code: string,
      |}
    |}
  |}
|};
export type CreateCountryMutation = {|
  variables: CreateCountryMutationVariables,
  response: CreateCountryMutationResponse,
|};
*/


/*
mutation CreateCountryMutation(
  $input: CreateCountryInput!
) {
  createCountry(input: $input) {
    edge {
      node {
        id
        name
        code
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreateCountryInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createCountry",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "CreateCountryPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "edge",
        "storageKey": null,
        "args": null,
        "concreteType": "CountryEdge",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "node",
            "storageKey": null,
            "args": null,
            "concreteType": "Country",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "id",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "name",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "code",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CreateCountryMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateCountryMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "CreateCountryMutation",
    "id": null,
    "text": "mutation CreateCountryMutation(\n  $input: CreateCountryInput!\n) {\n  createCountry(input: $input) {\n    edge {\n      node {\n        id\n        name\n        code\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '4f4df0ae0f52a6a39eb63e9a58ea714b';
module.exports = node;
