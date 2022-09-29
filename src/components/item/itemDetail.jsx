import React, { useContext } from "react";
import { Fineart } from "./item";
import { ItemCount } from "../Cart/itemCount";
import { cartContext } from "../../context/cartContext";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { collection, doc, getDoc, getFirestore } from "firebase/firestore"

export const ItemDetail = () => {
  const { productId } = useParams();

  const [localFineArt, setLocalFineArt] = useState({});

  useEffect(() => {
    const db = getFirestore();
    const itemDb = collection(db, 'items');
    const item = doc(itemDb, productId);
    getDoc(item)
      .then((doc) => {
        setLocalFineArt({ ...doc.data(), id: doc.id });
      })
      .catch((error) => console.log('Error: ' + error))
  }, [productId]);

  const context = useContext(cartContext);

  const onAdd = (quantity) => {
    context.addItem(localFineArt, quantity);
    console.log(context.cart);
  };

  return (
    <>
      {localFineArt ? (
        <div>
          <br />
          <br />
          <br />
          <br />
          <br />

          <div className="card">
            <div className="card__aside">
              <img
                className="card__image"
                src={`../${localFineArt.img}`}
                alt="Fine Art"
              />
            </div>
            <div className="card__header">
              <h4 className="card__title fs-paragraph fs-color">
                {localFineArt.name}
              </h4>
              <div className="card__subtitle">
                <span className="card__subtitle-money fs-paragraph fs-color">
                  $ {localFineArt.price}
                </span>
              </div>
            </div>
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
            <ul>
              <li>Fine art print (200gsm)</li>
              <li>
                A museum-quality fine art print paper with a
                textured, matt finish.
              </li>
            </ul>
          </div>
        </div>



      ) : (
        <p>Cargando...</p>
      )}
    </>
  );
};
