import React from "react"
import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    <footer className="container-menu container-fluid ">
      <div className="row g-3 ">
        <div className="div-menu col-md-4">
          <Link className="menu" to={"/shop"}>Shop</Link>
        </div>

        <div className="div-menu col-md-4 ">
          <Link className="menu" to={"/toursAndShows"}>Tours & Shows</Link>
        </div>

        <div className="div-menu col-md-4">
          <Link className="menu" to={"/costumerServices"}>Costumer Services</Link>
        </div>
      </div>
    </footer>
  )
}