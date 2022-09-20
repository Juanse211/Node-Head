import React, { useContext } from 'react';
import { ItemCount } from "../Cart/itemCount";
import { cartContext } from '../../context/cartContext';

export const ItemDetail = ({ product }) => {

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
        <img className="card__image" src={`../${product.img}`} alt="Fine Art" />
      </div>
      <div className="card__header">
        <h4 className="card__title fs-paragraph fs-color">{product.name}</h4>
        <div className="card__subtitle">
          <span className="card__subtitle-money fs-paragraph fs-color">$ {product.price}</span>
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