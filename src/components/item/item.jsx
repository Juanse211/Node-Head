import { Link } from "react-router-dom"
import React from "react"

export const Fineart = ({ art }) => {
  return (
    <div className="card">
      <div className="card__aside">
        <Link to={`/shop/detail/${art.id}`}>
          <img className="card__image" src={art.img} alt="Fine Art" />
        </Link>
      </div>
      <div className="card__header">
        <h4 className="card__title fs-paragraph fs-color">{art.name}</h4>
        <div className="card__subtitle">
          <span className="card__subtitle-money fs-paragraph fs-color">$ {art.price}</span>
        </div>
      </div>
      <Link to={`/shop/detail/${art.id}`}>
        <button>VIEW PRODUCT</button>
      </Link>
    </div>
  )
}