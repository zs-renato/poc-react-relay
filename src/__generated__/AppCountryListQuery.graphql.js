/**
 * @flow
 * @relayHash b502582a62a12f9f72deadba3af1fd18
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type CountryList_viewer$ref = any;
export type AppCountryListQueryVariables = {||};
export type AppCountryListQueryResponse = {|
  +viewer: {|
    +$fragmentRefs: CountryList_viewer$ref
  |}
|};
export type AppCountryListQuery = {|
  variables: AppCountryListQueryVariables,
  response: AppCountryListQueryResponse,
|};
*/


/*
query AppCountryListQuery {
  viewer {
    ...CountryList_viewer
    id
  }
}

fragment CountryList_viewer on Viewer {
  ...Country_viewer
  allCountries(last: 100, orderBy: name_ASC) {
    edges {
      node {
        ...Country_country
        id
        __typename
      }
      cursor
    }
    pageInfo {
      hasPreviousPage
      startCursor
    }
  }
}

fragment Country_country on Country {
  id
  code
  name
}

fragment Country_viewer on Viewer {
  id
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = [
  {
    "kind": "Literal",
    "name": "last",
    "value": 100
  },
  {
    "kind": "Literal",
    "name": "orderBy",
    "value": "name_ASC"
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "AppCountryListQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "CountryList_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AppCountryListQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "allCountries",
            "storageKey": "allCountries(last:100,orderBy:\"name_ASC\")",
            "args": (v1/*: any*/),
            "concreteType": "CountryConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "CountryEdge",
                "plural": true,
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
                      (v0/*: any*/),
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
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "__typename",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "cursor",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "pageInfo",
                "storageKey": null,
                "args": null,
                "concreteType": "PageInfo",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "hasPreviousPage",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "startCursor",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "name": "allCountries",
            "args": (v1/*: any*/),
            "handle": "connection",
            "key": "CountryList_allCountries",
            "filters": []
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "AppCountryListQuery",
    "id": null,
    "text": "query AppCountryListQuery {\n  viewer {\n    ...CountryList_viewer\n    id\n  }\n}\n\nfragment CountryList_viewer on Viewer {\n  ...Country_viewer\n  allCountries(last: 100, orderBy: name_ASC) {\n    edges {\n      node {\n        ...Country_country\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasPreviousPage\n      startCursor\n    }\n  }\n}\n\nfragment Country_country on Country {\n  id\n  code\n  name\n}\n\nfragment Country_viewer on Viewer {\n  id\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6377a823823e031cce8447e199b3e52d';
module.exports = node;
