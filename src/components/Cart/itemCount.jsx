import { userState } from 'react'

const ItemCount = (stock, initial) => {  
  const [count, setCount] = userState([])

  return (
    <div>
      <div>
        <h2>the count is: ${count.length}</h2>
      </div>
      <div>
        <button onClick={()=>{
          if (count <=initial){
          count.splice(0, 1,)
          }
        }}
        >-</button>
        <button onClick={()=>{
          if(count.length <= stock){
            alert('no more stock')
          }else{
            setCount([...count, "Item"])
            console.log(count)
          }
        }}
        >+</button>
        <button onClick={()=>{
          if(count.length <= stock){
            alert('no more stock')
          }else{
            setCount([...count, "Item"])
            console.log(count)
          }
        }}
        >Add To cart</button>
      </div>
    </div>
  )
}
export default ItemCount