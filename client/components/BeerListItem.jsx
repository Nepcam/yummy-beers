import React from 'react'

const BeerListItem = (props) => {
  const beer = props.beer
  return (
    <div className='beer'>
      <p className='name'>{beer}</p>
      <p className='description'>{beer}</p>
      <p>
        <span className='country'>{beer}</span>
        <span className='abv'>{beer} abv</span>
        <a href='#'
          className='cart-link'
          onClick={() => props.addToCart(beer.id)}>Add to cart</a>
      </p>
    </div>
  )
}

export default BeerListItem