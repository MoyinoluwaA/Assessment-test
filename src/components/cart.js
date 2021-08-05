import React from 'react'
import Nav from './nav'
import CartItems from './cartItems'


const Cart = () => {
    return(
        <div>
            <Nav className='red'/>
            <CartItems />
        </div>
    )
}

export default Cart