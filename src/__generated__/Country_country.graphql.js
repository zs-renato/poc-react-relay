/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Country_country$ref: FragmentReference;
declare export opaque type Country_country$fragmentType: Country_country$ref;
export type Country_country = {|
  +id: string,
  +code: string,
  +name: string,
  +$refType: Country_country$ref,
|};
export type Country_country$data = Country_country;
export type Country_country$key = {
  +$data?: Country_country$data,
  +$fragmentRefs: Country_country$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Country_country",
  "type": "Country",
  "metadata": null,
  "argumentDefinitions": [],
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
};
// prettier-ignore
(node/*: any*/).hash = '9c68bd607827f689e0e04749e45972e3';
module.exports = node;
