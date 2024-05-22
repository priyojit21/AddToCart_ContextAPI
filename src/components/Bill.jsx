import React from 'react'
import { useCart } from '../context/Cart'

function Bill() {

    const Cart = useCart();
    const {items,total} = Cart;

  return (
    <div>
      <h3>Total Cost</h3>
      {/* ki ki items choose korlam ota dekhacchi UI te */}
      {items && items.map((m) => {
        return <li>{m.name} - {m.price}</li>
      })}
      <p>Price is : {total}</p>
    </div>
  )
}

export default Bill
