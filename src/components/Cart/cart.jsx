import { useContext, useState } from "react"
import { cartContext } from "../../context/cartContext";
import { formatter } from "../../context/moneyTransform";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore"

export const Cart = () => {
  const [userData, setUserData] = useState({})
  const handleData = e => {
    setUserData({ ...userData, [e.target.name]: e.target.value })
  }
  const handleSubmit = e => {
    e.preventDefault()

    const database = getFirestore();
    const orders = collection(database, 'orders');

    const newOrder = {
      buyer: userData,
      item: cart,
    };

    addDoc(orders, newOrder).then((snapshot) => console.log(snapshot))
  }

  const { cart, removeItem, clear } = useContext(cartContext);
  return <>
    <main className="container__cart">
      <h3 className="fs-bleeding">YOUR SHOPPING CART</h3>
      {cart.map(item => <article className="cart__body" key={item.id}>
        <div className="container__cartImgAndName">
          <div className="container__cartImg">
            <img className="cart__img" src={item.img} alt={item.name} />
          </div>
          <div className="container__cartName">
            <p className="cart__name">{item.name}</p>
          </div>
        </div>
        <div className="container__cartPrice">
          <p className="cart__price"> {formatter.format(item.price)}</p>
        </div>
        <div className="container__quantityAndRemoveItem">
          <div className="container__cartQuantity">
            <p className="cart__quantity">{item.quantity}</p>
          </div>
          <div className="container__cartRemoveItem">
            <p className="cart__removeItem" onClick={() => removeItem(item.id)} >X</p>
          </div>
        </div>
      </article>)}
    </main >
    <form onSubmit={handleSubmit} className="fs-paragraph checkbox">
      <div className="checkbox__body">
        <div className="checkbox__body-66">
          <label className="checkbox__label" for="full-name">Full Name</label>
          <input className="checkbox__input" type="text" id="first-name" name="first-name" required onChange={handleData} />
        </div>

        <div className="checkbox__body-33">
          <label className=" checkbox__label" for="phone-number">Phone Number</label>
          <input className="checkbox__input" type="text" id="phone-number" name="phone-number" required onChange={handleData} />
        </div>

        <div className="checkbox__body-66">
          <label className="checkbox__label" for="email-info" >E-mail</label>
          <input className="checkbox__input" type="email" id="email-info" name="email-info" required onChange={handleData} />
        </div>

        <div className="container__cartBuy">
          <input className=" cartBuy" type="submit" value={"BUY"} />
        </div>
      </div>
    </form>
  </>
}