import React from 'react';
import Country from './Country';
import environment from './Environment'
import {
    QueryRenderer,
    graphql
} from 'react-relay';

const AppCountryListQuery = graphql`
  query CountryListQuery {
    countries {
        ...Country_country
    }
  }
`

class CountryList extends React.Component {
    render() {
        return (
            <QueryRenderer
                environment={environment}
                query={AppCountryListQuery}
                render={({error, props}) => {
                    if(error){
                        return <div>{error.message}</div>
                    } else if (props) {
                        return  <table style={{margin: 'auto'}}>
                                    <thead>
                                        <th>Country Name</th>
                                        <th>Delete</th>
                                    </thead>
                                    <tbody>
                                    {props.countries.map((country) => 
                                        <Country key={country.code} country={country} />
                                    )}
                                    </tbody>
                                </table>
                    }
                    return <div>Carregando</div>
                }}
            />
            
        )
    }
}

export default CountryList;