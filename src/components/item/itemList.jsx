import  React from 'react';
import { fineArt } from './item';
import { Item } from './item';


export const ItemList = ({fineart}) =>{
  return(
    <ul>
      { fineArt.map(art => {
        return <Item art={art}/>  
        })
      }
    </ul>
  )
}