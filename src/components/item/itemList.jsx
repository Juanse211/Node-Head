import { useState } from "react"

const [fineArt, setFineArt] = useState([])

try{
  const response = await fetch('../json/fineart.json')
  const data = await response.json()
  setFineArt(data.results)
  consol
}catch(e){
  console.log(e)
}


console.log(fineArt)
const cardList = () => {  
  return <>

  </>
}

export default ItemList