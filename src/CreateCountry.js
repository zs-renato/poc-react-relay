import React from 'react';
import CreateCountryMutation from './mutations/CreateCountryMutation';
import { createFragmentContainer, graphql } from 'react-relay';

class CreateCountry extends React.Component {
    state = {
        code: '',
        name: ''
    }
    
    render() {
        return(
            <div style={{ maxWidth: 300 }} >
                <input
                    value={this.state.name}
                    placeholder="Country name"
                    onChange={e => this.setState({ name: e.target.value })}>
                </input>
                <input 
                    value={this.state.code}
                    placeholder="Country code"
                    onChange={e => this.setState({ code: e.target.value })}>
                </input>
                <button onClick={() => this._handleCreate(this.props.viewer.id)} disabled={!this.state.name || !this.state.code}>
                    Adicionar
                </button>
            </div>
                        
        );
    }

    _handleCreate = viewerId => {
        const { code, name } = this.state;
        CreateCountryMutation(name, code, viewerId);
    };
}

export default createFragmentContainer(
    CreateCountry,
    {
        viewer: graphql`
            fragment CreateCountry_viewer on Viewer {
                id
            }
        `
    }
);