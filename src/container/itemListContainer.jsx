import { useState } from "react"
import { ItemList } from "../components/item/itemList";
import { fineArt } from "../components/item/item";
import { useEffect } from "react"

export const getProducts = new Promise((res,rej) =>{
  setTimeout(() => {
    res(fineArt)
  }, 2000)
})


export const ItemListContainer = ({greeting}) => {
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

  return (
    <div>
      <h2>
        {greeting}
      </h2>
      <ItemList fineArt={fineArt}/>
    </div>
  )
}