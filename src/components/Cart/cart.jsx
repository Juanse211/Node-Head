import { useContext } from "react"
import { cartContext } from "../../context/cartContext";

export const Cart = () => {
  const { cart, removeItem } = useContext(cartContext);
  console.log("hola", cart)

  return <>
    <main className="cart">
      <section className="cart-container">
        {cart.map(item => <article key={item.id}>
          <img src={item.img} width="200px" alt={item.name} />
          <p>{item.name}</p>
          <p>{item.amount}</p>
          <p onClick={() => removeItem(item.id)} >borrar </p>

        </article>)}
      </section>
    </main >
  </>
}