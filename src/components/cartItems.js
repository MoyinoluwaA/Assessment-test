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
    const [deliveryPrice] = useState(1200)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        let total = 0
        cart.map(item => {
            const price = item.price
            const quantity = item.quantity
            const totalPrice = price * quantity
            total += totalPrice
            return false;
        })
        setTotal(total)
    }, [cart])

    const increaseQuantity = (index) => {
        const newQuantity = cart[index].quantity + 1;
        data[index].quantity = newQuantity
        setCart(data)
        console.log(cart[index])
    }

    const decreaseQuantity = (index) => {
        const newQuantity = cart[index].quantity - 1;
        data[index].quantity = newQuantity
        console.log(cart[index])
        setCart(data)
        console.log(cart[index])
        // console.log(cart)
    }

    const removeItem = (index) => {
        data.filter(id => id - 1 === index)
        console.log(index)
        console.log(data)
    }

    return(
        <div className='cart'>
            <p><span className='disabled'>Home <i className='fa fa-angle-right' /> </span>Cart</p>
            <h2>Cart</h2>
            {cart.map((cartItem, index) => {
                let totalPrice = cartItem.price * cartItem.quantity
                return (
                    <div className='cartItem-row' key={index}>
                        <i className="fa fa-times remove-icon icon" onClick={() => removeItem(index)}/>
                        <div className='cartItem'>
                            <div className='cartItem-info'>
                                <img src={cartItem.imageSrc} alt='product-img' />
                                <div>
                                    <h3>{cartItem.name}</h3>
                                    <p className='quantity-block'>
                                        <i className="fa fa-plus-square-o icon" 
                                        aria-hidden="true" 
                                        onClick={() => increaseQuantity(index)}
                                        />
                                        <span className='quantity'>{cartItem.quantity}</span>
                                        <i className="fa fa-minus-square-o icon" 
                                        aria-hidden="true" 
                                        onClick={() => decreaseQuantity(index)}
                                        />
                                    </p>
                                </div>
                            </div>
                            <p className='price'>#{totalPrice}</p>
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
                    <p className='price'>#{deliveryPrice}</p>
                </div>

                <div className='total'>
                    <p>Total</p>
                    <p>{total + deliveryPrice}</p>
                </div>
            </section>


            <div className='checkout-div'>
                <button>Checkout</button>
            </div>
        </div>
    )
}

export default Cart