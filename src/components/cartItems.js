import React, {useEffect, useState} from 'react'
import Image4 from '../images/image4.svg'
import Image3 from '../images/image3.svg'
import Image1 from '../images/image1.svg'
import Scooter from '../images/scooter.svg'

const data = [
    {
        id: 1,
        name: 'KFC - King Bucket',
        quantity: 2,
        price: 5000,
        imageSrc: Image4
    },
    {
        id: 2,
        name: 'Refuel Max',
        quantity: 1,
        price: 1200,
        imageSrc: Image3
    },
    {
        id: 3,
        name: 'Refuel Max',
        quantity: 1,
        price: 1200,
        imageSrc: Image1
    }
]

const Cart = () => {
    const [cart, setCart] = useState(data)
    const [total, setTotal] = useState(0)

    // useEffect(() => {

    // }, [cart])

    // const increaseQuantity = (index) => {
    //     console.log(cart[index])
    //     const newQuantity = cart[index].quantity + 1;
    //     console.log(newQuantity)
    //     data[index].quantity = newQuantity
    //     console.log(data)
    //     setCart(data)
    //     console.log(cart)
    // }

    // const decreaseQuantity = (id) => {
    //     console.log(cart)
    // }

    return(
        <div className='cart'>
            <p><span className='disabled'>Home <i className='fa fa-angle-right' /> </span>Cart</p>
            <h2>Cart</h2>
            {cart.map((cartItem, index) => {
                return (
                    <div className='cartItem-row' key={index}>
                        <i className="fa fa-times remove-icon icon" />
                        <div className='cartItem'>
                            <div className='cartItem-info'>
                                <img src={cartItem.imageSrc} alt='product-img' />
                                <div>
                                    <h3>{cartItem.name}</h3>
                                    <p className='quantity-block'>
                                        <i className="fa fa-plus-square-o icon" 
                                        aria-hidden="true" 
                                        // onClick={() => increaseQuantity(index)}
                                        />
                                        <span className='quantity'>{cartItem.quantity}</span>
                                        <i className="fa fa-minus-square-o icon" 
                                        aria-hidden="true" 
                                        // onClick={() => decreaseQuantity()}
                                        />
                                    </p>
                                </div>
                            </div>
                            <p className='price'>#{cartItem.price * cartItem.quantity}</p>
                        </div>
                    </div>
                )
            })}

            <section className='delivery-total'>
                <div className='cartItem'>
                    <div className='cartItem-info'>
                        <img src={Scooter} alt='product-img' />
                        <h3 className='ml'>Delivery fee</h3>
                    </div>
                    <p className='price'>#1200</p>
                </div>

                <div className='total'>
                    <p>Total</p>
                    <p>{total}</p>
                </div>
            </section>


            <div className='checkout-div'>
                <button>Checkout</button>
            </div>
        </div>
    )
}

export default Cart