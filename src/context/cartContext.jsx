import React, { useState, createContext } from "react";

export const cartContext = createContext()
const { Provider } = cartContext

export const CartContext = ({ children }) => {

  const [cart, setcart] = useState([])
  const [total, settotal] = useState(0)


  const isInCart = (item) => {
    const result = cart.some(p => p.item.id == item.id)
  }

  const cartProductAux = []
  const addItem = (item, quantity) => {
    const cartProduct = { item, quantity }

    if (isInCart(item)) {
      cartProduct = cart.find(p => p.item.id == item.id)
      cartProductAux.quantity = cartProduct.quantity + quantity
      cartProductAux = [...cart]
    } else {
      cartProductAux = [...cart, cartProduct]
    }
    setcart(cartProductAux)
  }

  const clear = () => {
    setcart([]);
  }

  const removeItem = (id) => {
    cartProductAux = cart.filter(p => p.item.id !== id)
    setcart(cartProductAux)
  }

  return (
    <Provider value={{ cart, clear, removeItem, addItem }}>
      {children}
    </Provider>
  )
}

