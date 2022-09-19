import React, { useState, useContext } from "react";

export const CartContext = React.createContext()

export const CartProvider = ({ children }) => {

  const [artUnique, setartUnique] = useState([])

  const [cart, setcart] = useState([])

  const isInCart = cart.some(function (art) {
    return art.id === artUnique[0].id
  })

  const addItem = (art) => {
    console.log(isInCart)
    console.log(artUnique[0].id)

    /*
    console.log(isInCart)
    if (isInCart === false) {
      cart.push(art)
      isInCart()
    } else {
      console.log("si ta")
    }
    console.log(cart)
    */
  }

  const clear = () => {
    setcart([]);
  }

  const removeItem = () => {

  }

  return (
    <CartContext.Provider value={{ artUnique, cart, isInCart, addItem, clear, removeItem }}>
      {children}
    </CartContext.Provider>
  )
}

