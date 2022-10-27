import React, { useState, createContext } from "react";

export const cartContext = createContext();

export const CartContextWrapper = ({ children }) => {
  const [cart, setcart] = useState([]);
  const [total, setTotal] = useState(0);

  const isInCart = (item) => {
    const result = cart.some((p) => p.id == item.id);
    return result;
  };

  let cartProductAux = [];
  const addItem = (item, quantity) => {
    let cartProduct = { ...item, quantity };

    if (isInCart(item)) {
      cartProduct = cart.find((p) => p.id === item.id);
      cartProduct.quantity = cartProduct.quantity + quantity;
      cartProductAux = [...cart];
    } else {
      cartProductAux = [...cart, cartProduct];
    }
    setcart(cartProductAux);
  };

  const clear = () => {
    setcart([]);
  };

  const removeItem = (id) => {
    cartProductAux = cart.filter((p) => p.id !== id);
    setcart(cartProductAux);
  };

  return (
    <cartContext.Provider value={{ cart, clear, removeItem, addItem }}>
      {children}
    </cartContext.Provider>
  );
};
