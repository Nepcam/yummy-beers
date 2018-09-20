import React from 'react'
import BeerList from './BeerList'
import beerData from '../../data/beers'

class Listing extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}
    }
    render() {
        return (
            <div className='listing'>
                <p className="welcome">Welcome to Cams beers.</p>

                <BeerList beers={beerData.beers}/>
            </div>
        )
    }
}

export default Listing