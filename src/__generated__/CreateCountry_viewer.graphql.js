/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type CreateCountry_viewer$ref: FragmentReference;
declare export opaque type CreateCountry_viewer$fragmentType: CreateCountry_viewer$ref;
export type CreateCountry_viewer = {|
  +id: string,
  +$refType: CreateCountry_viewer$ref,
|};
export type CreateCountry_viewer$data = CreateCountry_viewer;
export type CreateCountry_viewer$key = {
  +$data?: CreateCountry_viewer$data,
  +$fragmentRefs: CreateCountry_viewer$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "CreateCountry_viewer",
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
(node/*: any*/).hash = '9f800acdc48fde6c7616a41e8dc77928';
module.exports = node;
