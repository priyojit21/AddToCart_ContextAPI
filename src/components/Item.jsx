import React from 'react'
import { useCart } from '../context/Cart'

function Item(props) {

    // just hook ta k import koro , r 2 import likhte hbena
    const Cart = useCart();
    const {items,setItems} = Cart


    const AddToCart = () => {
        //set items a array te aagey ja chilo ogulo rakhlm  + notun price r name tao rakhchi 
        setItems([...items, { name: props.name, price: props.price }])

    }

    return (
        <div>
            <h3>Product Name : {props.name}</h3>
            <p>Price: {props.price}</p>
            <button type='submit' onClick={AddToCart}>Add to Cart</button>
        </div>
    )
}

export default Item
