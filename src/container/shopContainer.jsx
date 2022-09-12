import { useState, useEffect } from "react"
import { fineArt } from "../components/item/item";
import { ItemList } from "../components/item/itemList";
import { ItemDetailContainer } from "./itemDetailContainer";

export const getProducts = new Promise((res, rej) => {
  setTimeout(() => {
    res(fineArt)
  }, 2000)
})


export const ItemListContainer = ({ greeting }) => {
  const [fineArt, setFineArt] = useState([])

  useEffect(() => {
    getProducts
      .then((data) => {
        setFineArt(data)
      })
  }, [])

  const onAdd = () => {
    console.log('Added to cart')
  }

  return <>
    <h1 className="fs-center fs-bleeding fs-title-m fs-color">SHOP</h1>
    <section className="container-shop">
      <div className="card__text">
        <h2 className="fs-title-s fs-center fs-color">FINE ART PRINTS</h2>
      </div>
      <ItemList />
    </section>
  </>
}