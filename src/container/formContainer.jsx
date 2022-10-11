import React from "react"
import { Link } from "react-router-dom"

export const FormContainer = () => {
  return <>
    <section className="container-text ">
      <h1 className="fs-center fs-bleeding fs-title-m fs-color">PROVIDE YOUR DETAILS</h1>
    </section>

    <form className="checkbox" action="#" method="post" enctype="application/x-www-form-urlencoded">
      <div className="checkbox__body">
        <legend className="fs-title-s fs-color">Data</legend>
        <div className="checkbox__body-50">
          <label className="checkbox__label" for="text">First Name</label>
          <input className="checkbox__input" id="text" type="text" name="text" />
        </div>

        <div className="checkbox__body-50">
          <label className="checkbox__label" for="formulary-data-last-name">Last Name</label>
          <input className="checkbox__input" id="text" type="text" name="formulary-data-last-name" />
        </div>

        <div className="checkbox__body-66">
          <label className="checkbox__label" for="email-address">Email Address</label>
          <input className="checkbox__input" type="email" name="email-address" />
        </div>

        <div className="checkbox__body-33">
          <label className="checkbox__label" for="phone">Phone</label>
          <input className="checkbox__input" type="phone" name="phone" />
        </div>

        <div className="checkbox__body-66">
          <label className="checkbox__label" for="email-confirm">Confirm Email</label>
          <input className="checkbox__input" type="email" name="email-confirm" />
        </div>

        <div className="checkbox__body-33">
          <label className="checkbox__label" for="zone">Zone</label>
          <select className="checkbox__input" name="zone">
            <option value="" hidden>Chose option </option>
            <option value="p">Premium front nave</option>
            <option value="c">Central nave</option>
            <option value="r">Rear nave</option>
            <option value="ssl">Side stage left</option>
            <option value="ssr">Side stage right</option>
            <option value="sal">Side aisle left</option>
            <option value="ssl">Side aisle right</option>
          </select>
        </div>

        <div className="container-picture">
          <img className="stage" src="../files/RAF-Centenary-Concert-Seating-Areas copia.png" alt="stage" />
        </div>

        <div className="checkbox-2">
          <div className="tof fs-color">
            <label for="acepta ">I agree to the <Link className="fs-primary-color" to={"/tos"}>Term of Service and PrivacyPolicy</Link></label>
            <input className="tof__input" id="acepta" type="checkbox" name="acepta" value="1" />
          </div>

          <div className="button">
            <Link to={"#"}></Link>
            <input className="button__body" type="submit" value="Continue" />
          </div>
        </div>
      </div>
    </form>

  </>
}
