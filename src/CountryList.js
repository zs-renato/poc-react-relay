import React from 'react';
import Country from './Country';
import { createFragmentContainer, graphql } from 'react-relay';

class CountryList extends React.Component {
    render() {
        return (
            <table style={{margin: 'auto'}}>
                <thead>
                    <th>Country Name</th>
                    <th>Delete</th>
                </thead>
                <tbody>
                {this.props.viewer.allCountries.edges.map(({ node }) =>
                    <Country key={node.code} country={node} />
                )}
                </tbody>
            </table>
        );
    }
}

export default createFragmentContainer(
    CountryList,
    { viewer: graphql`
        fragment CountryList_viewer on Viewer {
            allCountries(last: 100, orderBy: name_ASC) @connection(key: "CountryList_allCountries", filters: []) {
                edges {
                    node {
                        ...Country_country
                    }
                }
            }
        }
    `},
);