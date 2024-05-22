import { createContext, useContext, useState } from "react";

export const CartContext = createContext(null);

export const CartProvider = ({children}) => {
    const [items,setItems] = useState([]);


    //calculating bill using reduce function
    const total = items.reduce(
        (a, b) => a + Number(b.price),
        //initial value of a is 0
        0,
      );
    

    return (
        <CartContext.Provider value={{items,setItems,total}}>
            {children}
        </CartContext.Provider>
    )
}

//create custom hook and export

export const useCart = () => {
    const Cart = useContext(CartContext);
    return Cart;
}