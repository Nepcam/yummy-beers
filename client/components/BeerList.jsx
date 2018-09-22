import React from 'react'
import BeerListItem from './BeerListItem';


// This might need to be turned into a stateful (class-based) component
const BeerList = (props) => {
    return (
        <div className='listing'>
            <div className='beerList'>
                {props.beers.map(beer => {
                    return (
                        <BeerListItem key={beer.id} beer={beer} addToCart={props.addToCart} />
                    )
                })}
            </div>
        </div>
    )
}


export default BeerList