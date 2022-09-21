import React, { useContext } from 'react';
import { fineArt } from './item';
import { ItemCount } from "../Cart/itemCount";
import { cartContext } from '../../context/cartContext';
import { useParams } from "react-router-dom";

export const ItemDetail = ({ product }) => {
  const { productId } = useParams()

  const FindArt = fineArt.find(art => {
    return art.id == productId
  })

  const { addItem, cart } = useContext(cartContext)

  const onAdd = (quality) => {
    addItem(product, quality)
    console.log(cart)
  }

  return <>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <div className="card">
      <div className="card__aside">
        <img className="card__image" src={`../${FindArt.img}`} alt="Fine Art" />
      </div>
      <div className="card__header">
        <h4 className="card__title fs-paragraph fs-color">{FindArt.name}</h4>
        <div className="card__subtitle">
          <span className="card__subtitle-money fs-paragraph fs-color">$ {FindArt.price}</span>
        </div>
      </div>
      <ItemCount stock={5} initial={1} onAdd={onAdd} />
      <ul>
        <li>Fine art print (200gsm)</li>
        <li>A museum-quality fine art print paper with a textured, matt finish.</li>
      </ul>
    </div>
  </>
}