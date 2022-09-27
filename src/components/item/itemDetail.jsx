import React, { useContext } from "react";
import { fineArt } from "./item";
import { ItemCount } from "../Cart/itemCount";
import { cartContext } from "../../context/cartContext";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

export const ItemDetail = ({ product }) => {
  const { productId } = useParams();

  const [localFineArt, setLocalFineArt] = useState({});

  useEffect(() => {
    setLocalFineArt(
      fineArt.find((art) => {
        return art.id === Number(productId);
      })
    );
  }, [productId]);

  useEffect(() => {
  }, [productId]);

  const context = useContext(cartContext);

  const onAdd = (quality) => {
    context.addItem(product, quality);
    console.log(context.art);
  };

  return (
    <>
      {localFineArt ? (
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
      ) : (
        <p>Cargando...</p>
      )}
    </>
  );
};
