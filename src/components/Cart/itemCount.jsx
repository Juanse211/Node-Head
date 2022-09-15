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
        <h2>{count}</h2>
      </div>
      <div>
        <button onClick={substract}>-</button>
        <button onClick={add}>+</button>
        <button onClick={() => onAdd(count)}>Add To cart</button>
      </div>
    </div>
  )
}