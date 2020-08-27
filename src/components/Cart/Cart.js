import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, course) => total + course.price, 0);
    return (
        <div className='text-center mt-5 cart'>
            <h4>Order Summary</h4>
            <p>Items Order:{cart.length}</p>
            <p>Total Price: ${total}</p>
            <button className='cart-btn'>Order Review</button>
        </div>
    );
};

export default Cart;