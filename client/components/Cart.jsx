import React from 'react'
import CartList from './CartList';

class Cart extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}
    }
    render() {
        return (
            <div className='cart'>
            <p className="welcome">Thirsty? Sweet! You're one step closer to a quenching.</p>
            <CartList/>
            </div>
        )
    }
}

export default Cart