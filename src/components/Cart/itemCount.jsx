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
    <div>
      <div>
        <div className="checkbox__body-33 modal__quantity">
          <input className="checkbox__input" id="quantity" disabled name="quantity" value={count} min="0" />
        </div>
        <button onClick={substract}>-</button>
        <button onClick={add}>+</button>
        <button className='button__body' onClick={() => onAdd(count)}>Add To cart</button>
      </div>
    </div>
  )
}