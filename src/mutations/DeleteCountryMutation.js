import { commitMutation, graphql } from 'react-relay';
import { ConnectionHandler } from 'relay-runtime';
import environment from '../Environment';

const mutation = graphql`
    mutation DeleteCountryMutation($input: DeleteCountryInput!) {
        deleteCountry(input: $input) {
            deletedId
        }
    }
`;

export default (countryId, viewerId) => {
    const variables = {
        input: {
            id: countryId,
            clientMutationId: ''
        }
    };
    commitMutation(
        environment,
        {
            mutation,
            variables,
            onError: err => console.log(err),
            optimisticUpdater: proxyStore => {
                const viewerProxy = proxyStore.get(viewerId);
                const connection = ConnectionHandler.getConnection(viewerProxy, 'CountryList_allCountries');
                if (connection) {
                    ConnectionHandler.deleteNode(connection, countryId);
                }
            },
            updater: proxyStore => {
                const viewerProxy = proxyStore.get(viewerId);
                const connection = ConnectionHandler.getConnection(viewerProxy, 'CountryList_allCountries');
                if (connection) {
                    const deletedId = proxyStore.getRootField('deleteCountry').getValue('deletedId');
                    ConnectionHandler.deleteNode(connection, deletedId);
                }

            }
        }
    );
};