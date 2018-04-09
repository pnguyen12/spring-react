import React from 'react';

export default class Beer extends React.Component {
    constructor() {
        super();

        this.state = {
            beer: []
        }
    }

    componentWillReceiveProps = nextProps => {
        if(nextProps.beer) {
            this.setState({
                beer: nextProps.beer
            }, () => {
                console.log('state inside of beer.js', this.state.beer);
            })
        }
    }

    listBeers = () => {
        const { beer } = this.state;
        console.log('beer', beer);
        return beer.map((beer, index) => {
            return (
                <div key={index}>
                    {beer.name}
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                <h1>Good Beers</h1>
               {this.listBeers()}
            </div>
        )
    }
}