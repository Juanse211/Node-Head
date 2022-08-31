import { useState } from 'react'

const ItemCount = (stock, initial) => {  
  const [count, setCount] = useState([])
  
  return (
    <div>
      <div>
        <h2>the count is: ${count.length}</h2>
      </div>
      <div>
        <button onClick={()=>{
          if(count.lenght <= initial){
            alert('min is 1')
          }else{
            setCount([...count, -1])
            console.log(count)
          }
        }}
        >-</button>
        <button onClick={()=>{
          if(count.length >= stock){
            console.log(count)
            alert('no more stock')
          }else{
            setCount([...count, +1])
            console.log(count)
          }
        }}
        >+</button>
        <button onClick={()=>{
          if(count.length >= 5){
            console.log(count)
            alert('no more stock')
          }else{
            setCount([...count, +1])
            console.log(count)
          }
        }}
        >Add To cart</button>
      </div>
    </div>
  )
}
export default ItemCount