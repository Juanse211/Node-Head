import React, { useState, useContext } from "react";

export const CartContext = React.createContext()

export const CartProvider = ({ children }) => {


  const [cart, setcart] = useState([])


  const isInCart = (art) => {
    console.log(art)
    console.log(art.id)
    cart.find(art) // no funca, pero el push si... ni idea
    console.log(cart)

  }

  const addItem = (art) => {

  }

  const clear = () => {
    setcart([]);
  }

  const removeItem = () => {

  }

  return (
    <CartContext.Provider value={{ cart, isInCart, addItem, clear, removeItem }}>
      {children}
    </CartContext.Provider>
  )
}