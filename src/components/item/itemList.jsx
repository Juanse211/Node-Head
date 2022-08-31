import  React from 'react';
import {FineArt} from './item';
import Item from './item';


export const ItemList = ({fineArt}) =>{
  return(
    <ul>
      { fineArt.map(art => {
        return <Item art={art}/>  
        })
      }
    </ul>
  )
}