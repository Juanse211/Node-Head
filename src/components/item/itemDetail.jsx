import React, { useContext } from "react";
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
        <div className="modal-container fs-bleeding">
          <div id="modal" className="my-modal">
            <div id="modal__aside">
              <img id="modal__img" src={`../${localFineArt.img}`} alt="Fine Art" />
            </div>
            <div id="modal__section">
              <div id="modal__header">
                <h4 className="fs-color">{localFineArt.name}</h4>
                <h5 className="fs-color">$ {localFineArt.price}</h5>
              </div>
              <ItemCount stock={5} initial={1} onAdd={onAdd} />
              <div id="modal__footer">
                <ul>
                  <li>
                    Fine art print (200gsm)
                  </li>
                  <li>
                    A museum-quality fine art print paper with a textured, matt finish.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (<p>Cargando...</p>
      )}
    </>
  );
};
