import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Country from './Country'

class CountriesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: []
        }

    }

    componentDidMount(){
        axios.get('https://covid19-api-project.herokuapp.com/summary')
        .then(response => {
            this.setState({countries: response.data})
            console.log(this.state.countries)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    }


    render() {
        const countryComponents = this.state.countries.map(country => {
            return <Country key={country._id} item={country} />
        })
      
        return (
            <div>
              {countryComponents}
            </div>
        )
    }
}

export default CountriesList