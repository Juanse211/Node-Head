import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { fineArt } from "../components/item/item";
import { ItemDetailContainer } from "./itemDetailContainer";

export const getProducts = new Promise((res,rej) =>{
  setTimeout(() => {
    res(fineArt)
  }, 2000)
})


export const ItemListContainer = ({greeting}) => {
  const [fineArt, setFineArt] = useState([])
  const {parameterUrl} = useParams()
  console.log(parameterUrl)

  useEffect(() => {
    getProducts
    .then((data) => {
      setFineArt(data)
    })
  }, [])

  const onAdd = () => {
    console.log('Added to cart')
  }

  return<>
    <ItemDetailContainer />
  </>
}