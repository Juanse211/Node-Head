import { Link } from "react-router-dom"

export const CartIcon = () => {
  return (
    <Link to="cart">
      <img id="cart" src="../files/shopping-cart.png" alt="cart" />
      <img id="cart-dark" src="../files/shopping-cart-dark.png" alt="cart" />
    </Link>
  )
}