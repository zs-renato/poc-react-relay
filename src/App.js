import React, { Component } from 'react';
import CountryList from './CountryList';
import CreateCountry from './CreateCountry';
import environment from './Environment';
import {
  QueryRenderer,
  graphql
} from 'react-relay';

const AppCountryListQuery = graphql`
  query AppCountryListQuery {
    viewer {
      ...CreateCountry_viewer
      ...CountryList_viewer
    }
  }
`;

class App extends Component {
  render (){
    return (
      <div>
        
        <QueryRenderer
            environment={environment}
            query={AppCountryListQuery}
            render={({error, props}) => {
                if(error){
                    return <div>{error.message}</div>;
                } else if (props) {
                    return (
                      <div style={{margin: 'auto'}}>
                        <CreateCountry viewer={props.viewer}/>
                        <CountryList viewer={props.viewer} />
                      </div>
                    )
                } else {
                  return <div>Carregando</div>;
                }
            }} />
      </div>
    );
  }
}

export default App;