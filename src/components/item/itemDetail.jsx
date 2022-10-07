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
              <form class="modal__body form__test">
                <div id="modal__sub__body">
                  <div className="checkbox__body-66 fs-color modal__size">
                    <select className="checkbox__input">
                      <option value="" hidden>Chose the size</option>
                      <option value="12">12'x12'</option>
                      <option value="28">28'x28'</option>
                      <option value="40">40'x40'</option>
                    </select>
                  </div>
                  <div className="checkbox__body-33 modal__quantity">
                    <input className="checkbox__input" type="number" id="quantity" name="quantity" value="1" min="0" />
                  </div>
                </div>
                <div id="modal__cart">
                  <a href="#"></a>
                  <input className="button__body" type="submit" value="Add to cart" />
                </div>
              </form>
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
