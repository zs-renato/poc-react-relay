import React from 'react';
import {
    createFragmentContainer,
    graphql
} from 'react-relay';

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

    _handleDelete = () => {}
}

export default createFragmentContainer(
    Country,
    { country: graphql`
    fragment Country_country on Country {
        code
        name
    }
    `}
);