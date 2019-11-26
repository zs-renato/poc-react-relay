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
(node/*: any*/).hash = 'edc6b35f4b84e3fadb47d83e35ae4614';
module.exports = node;
