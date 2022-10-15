import React, { useEffect, useState } from 'react';
import { Fineart } from './item';
import { getFirestore, collection, getDocs } from "firebase/firestore"

export const ItemList = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const db = getFirestore()
    const items = collection(db, 'items')
    getDocs(items).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => ({
        ...doc.data()
      }))
      setProducts(docs)
    })
  }, [])

  return <>
    <div className="container-card" id="container-card">
      {products.map(art => {
        return <Fineart art={art} />
      })
      }
    </div>
  </>
}