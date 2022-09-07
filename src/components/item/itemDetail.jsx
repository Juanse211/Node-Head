import  React from 'react';
import { fineArt } from './item';
import { Item } from './item';

export const GetItem = () =>{
  return(<>
    <div className="container-card" id="container-card">
      { fineArt.map(art => {
        return <Item art={art}/>  
        })
      }
    </div>
  </>)
}