import React from 'react'
import {connect} from 'react-redux'
//import Cart from 'Cart'


const BeerListItem = (props) => {
    const beer = props.beer
    return (
        <div className='beer'>
            <p className='name'>{beer.name}</p>
            <p className='description'>{beer.brewery}</p>
            <p>
                <span className='country'>{beer.country}</span>
                <span className='abv'>{beer.abv} abv</span>
                <a href='Cart'
                    className='cart-link'
                    onClick={() => props.addToCart(beer.id)}>Add to cart</a> 
            </p>
        </div>
    )
}
// Error in line 17 - something to do with the addToCart function


export default BeerListItem
