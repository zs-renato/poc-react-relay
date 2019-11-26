import React, { Component } from 'react';
import CountryList from './CountryList';
import './App.css';
import environment from './Environment';
import {
  QueryRenderer,
  graphql
} from 'react-relay';

const AppCountryListQuery = graphql`
  query AppCountryListQuery {
    viewer {
      ...CountryList_viewer
    }
  }
`;

class App extends Component {
  render (){
    return (
      <QueryRenderer
                environment={environment}
                query={AppCountryListQuery}
                render={({error, props}) => {
                    if(error){
                        return <div>{error.message}</div>;
                    } else if (props) {
                        return  <CountryList viewer={props.viewer} />;
                    } else {
                      return <div>Carregando</div>;
                    }
                }}
            />
    );
  }
}

export default App;
