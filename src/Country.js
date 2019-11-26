import React from 'react';
import {
    createFragmentContainer,
    graphql
} from 'react-relay';
import DeleteCountryMutation from './mutations/DeleteCountryMutation';

class Country extends React.Component {

    render() {
        return(
            <tr>
                <td>
                    {this.props.country.name}
                </td>
                <td>
                    <span onClick={this._handleDelete}>Delete</span>
                </td>
            </tr>
        );
    }

    _handleDelete = () => {
        DeleteCountryMutation(this.props.country.id, this.props.viewer.id);
    }
}

export default createFragmentContainer(
    Country,
    {
        country: graphql`
            fragment Country_country on Country {
                id
                code
                name
            }
        `,
        viewer: graphql`
            fragment Country_viewer on Viewer {
                id
            }
        `
    }
);