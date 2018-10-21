import React from 'react'
import CartListItem from './CartListItem';

class CartList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cart: props.cart
        }
    }
    render () {
        console.log(this.state.props.cart)
        return (
          <div className='cart'>
            <table>
              <thead>
                <tr>
                  <th>Beer</th>
                  <th>Quantity</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {this.props.cart.map((item, id) => {
                  return (
                      
                    <CartListItem key={id}
                      item={item}
                      update={this.update.bind(this)}
                      deleteFromCart={this.deleteItem.bind(this)}
                    />
                  )
                })}
              </tbody>
            </table>
    
            <p className='actions'>
              <a href='#' onClick={this.props.keepShopping}>Continue shopping</a>
              <button onClick={() => this.props.updateCart(this.state.cart)}>Update</button>
              <button className='button-primary'>Checkout</button>
            </p>
          </div>
        )
      }
    }

export default CartList
                                    
                            