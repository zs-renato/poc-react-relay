/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Country_viewer$ref: FragmentReference;
declare export opaque type Country_viewer$fragmentType: Country_viewer$ref;
export type Country_viewer = {|
  +id: string,
  +$refType: Country_viewer$ref,
|};
export type Country_viewer$data = Country_viewer;
export type Country_viewer$key = {
  +$data?: Country_viewer$data,
  +$fragmentRefs: Country_viewer$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Country_viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '4422a04e36f59ec0b9bfb2a00a8b6a0e';
module.exports = node;
