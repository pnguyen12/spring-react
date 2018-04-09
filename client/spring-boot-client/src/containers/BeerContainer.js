import React from 'react';
import axios from 'axios';
import Beer from '../components/Beer';

export default class BeerContainer extends React.Component {
    constructor() {
        super();

        this.state = {

        }
    }

    componentDidMount() {
        const URL = "http://localhost:8080/good-beers"
        axios.get(URL)
        .then(response => {
            this.setState({
                beerList: response.data
            } , () => {
                console.log(this.state);
            })
        })
    }

    render() {
        const { beerList } = this.state;
        return (
            <div>
                <Beer beer={beerList} />
            </div>
        )
    }
}