import  React from 'react';
import { fineArt } from './item';
import { Item } from './item';

export const GetItem = () =>{
  return(
    <ul>
      { fineArt.map(art => {
        return <Item art={art}/>  
        })
      }
    </ul>
  )
}