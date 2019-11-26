/**
 * @flow
 * @relayHash a57fcd2c416613260acb9d2825c712e3
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Country_country$ref = any;
export type CountryListQueryVariables = {||};
export type CountryListQueryResponse = {|
  +countries: ?$ReadOnlyArray<?{|
    +$fragmentRefs: Country_country$ref
  |}>
|};
export type CountryListQuery = {|
  variables: CountryListQueryVariables,
  response: CountryListQueryResponse,
|};
*/


/*
query CountryListQuery {
  countries {
    ...Country_country
  }
}

fragment Country_country on Country {
  code
  name
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CountryListQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "countries",
        "storageKey": null,
        "args": null,
        "concreteType": "Country",
        "plural": true,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "Country_country",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CountryListQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "countries",
        "storageKey": null,
        "args": null,
        "concreteType": "Country",
        "plural": true,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "code",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "name",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "CountryListQuery",
    "id": null,
    "text": "query CountryListQuery {\n  countries {\n    ...Country_country\n  }\n}\n\nfragment Country_country on Country {\n  code\n  name\n}\n",
    "metadata": {}
  }
};
// prettier-ignore
(node/*: any*/).hash = 'ea244e8a26b2c505c72c38a53297309a';
module.exports = node;
