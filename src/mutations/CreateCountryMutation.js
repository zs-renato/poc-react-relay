import { commitMutation, graphql } from 'react-relay'
import { ConnectionHandler } from 'relay-runtime'
import environment from '../Environment'

const mutation = graphql`
  mutation CreateCountryMutation($input: CreateCountryInput!) {
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
`;

let tempID = 0;

export default (name, code, viewerId) => {
  const variables = {
    input: {
      name,
      code,
      clientMutationId: '',
    },
  }
  commitMutation(environment, {
    mutation,
    variables,
    updater: (proxyStore) => {
      const createCountryField = proxyStore.getRootField('createCountry');
      const newCountry = createCountryField.getLinkedRecord('edge');

      const viewerProxy = proxyStore.get(viewerId);
      const connection = ConnectionHandler.getConnection(viewerProxy, 'CountryList_allCountries');
      if (connection) {
        ConnectionHandler.insertEdgeAfter(connection, newCountry);
      }
    },

    onCompleted: () => {
      // callback()
    },
    onError: err => console.error(err),
  })
}