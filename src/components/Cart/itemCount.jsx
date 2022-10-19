import React, { useState } from 'react'

export const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial)
  const add = () => {
    if (count < stock) {
      setCount(count + 1)
    }
  }
  const substract = () => {
    if (count > initial) {
      setCount(count - 1)
    }
  }
  return (
    <div className='itemCount__container'>
      <div className="count marginHeightAuto">
        <input className="checkbox__input" id="quantity" disabled name="quantity" value={count} min="0" />
      </div>
      <div className='buttonsContainer'>
        <button className='buttons' onClick={add}>+</button>
        <button className='buttons' onClick={substract}>-</button>
      </div>
      <div className='buttonAddToCart__container'>
        <button className='button__body marginHeightAuto' onClick={() => onAdd(count)}>Add To cart</button>
      </div>
    </div>
  )
}