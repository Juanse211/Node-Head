import React from "react"
import { Link } from "react-router-dom"

export const ToursAndShowsContainer = () => {
  return <>
    <section className="container-text fs-bleeding">
      <h1 className="fs-center fs-bleeding fs-color">TOUR & SHOWS DATES </h1>
      <br />
      <h2 className="fs-center fs-color">The Smile</h2>
    </section>

    <section className="container-tabs">
      <div className="tabs__date">May 2022</div>
      <div className="tabs">
        <div className="tabs__list">
          <div className="tabs__item">Mon 16</div>
          <div className="tabs__item-2">
            <div className="tabs__item__item fs-start">Hala</div>
            <div className="tabs__item__item fs-center-tab">Zagreb</div>
            <div className="tabs__item__item fs-end">Croatia</div>
          </div>
          <button className="tabs__item-3">
            <Link to={"/form"}>BUY NOW</Link>
          </button>
        </div>

        <div className="tabs__list">
          <div className="tabs__item">Tue 17</div>
          <div className="tabs__item-2 ">
            <div className="tabs__item__item fs-start">Gasometer</div>
            <div className="tabs__item__item fs-center-tab">Vienna</div>
            <div className="tabs__item__item fs-end">Austria</div>
          </div>
          <button className="tabs__item-3">
            <Link to={"/form"}>BUY NOW</Link>
          </button>
        </div>

        <div className="tabs__list">
          <div className="tabs__item">Thu 19</div>
          <div className="tabs__item-2">
            <div className="tabs__item__item fs-start">Forum Karlin</div>
            <div className="tabs__item__item fs-center-tab">Prague</div>
            <div className="tabs__item__item fs-end">Czech Republic</div>
          </div>
          <button className="tabs__item-3">
            <Link to={"/form"}>BUY NOW</Link>
          </button>
        </div>

        <div className="tabs__list">
          <div className="tabs__item">Fri 20</div>
          <div className="tabs__item-2">
            <div className="tabs__item__item fs-start">Tempodrom</div>
            <div className="tabs__item__item fs-center-tab">Berlin</div>
            <div className="tabs__item__item fs-end">Germany</div>
          </div>
          <button className="tabs__item-3">
            <Link to={"/form"}>BUY NOW</Link>
          </button>
        </div>

        <div className="tabs__list">
          <div className="tabs__item">Mon 23</div>
          <div className="tabs__item-2">
            <div className="tabs__item__item fs-start">Cirkus</div>
            <div className="tabs__item__item fs-center-tab">Stockholm</div>
            <div className="tabs__item__item fs-end">Sweden</div>
          </div>
          <button className="tabs__item-3">
            <Link to={"/form"}>BUY NOW</Link>
          </button>
        </div>

        <div className="tabs__list">
          <div className="tabs__item">Tue 24</div>
          <div className="tabs__item-2">
            <div className="tabs__item__item fs-start">Sentrum Scene</div>
            <div className="tabs__item__item fs-center-tab">Oslo</div>
            <div className="tabs__item__item fs-end">Norway</div>
          </div>
          <button className="tabs__item-3">
            <a className="tabs__item-3__sold-out" href="#">SOLD OUT</a>
          </button>
        </div>

        <div className="tabs__list">
          <div className="tabs__item">Fri 27</div>
          <div className="tabs__item-2">
            <div className="tabs__item__item fs-start">Paradiso</div>
            <div className="tabs__item__item fs-center-tab">Netherlands</div>
            <div className="tabs__item__item fs-end">Netherlands</div>
          </div>
          <button className="tabs__item-3">
            <a className="tabs__item-3__sold-out" href="#">SOLD OUT</a>
          </button>
        </div>

        <div className="tabs__list">
          <div className="tabs__item">Sun 29</div>
          <div className="tabs__item-2">
            <div className="tabs__item__item fs-start">Roundhouse</div>
            <div className="tabs__item__item fs-center-tab">London</div>
            <div className="tabs__item__item fs-end">UK</div>
          </div>
          <button className="tabs__item-3">
            <a className="tabs__item-3__sold-out" href="#">SOLD OUT</a>
          </button>
        </div>

        <div className="tabs__list">
          <div className="tabs__item">Mon 30</div>
          <div className="tabs__item-2">
            <div className="tabs__item__item fs-start">Roundhouse</div>
            <div className="tabs__item__item fs-center-tab">London</div>
            <div className="tabs__item__item fs-end">UK</div>
          </div>
          <button className="tabs__item-3">
            <a className="tabs__item-3__sold-out" href="#">SOLD OUT</a>
          </button>
        </div>
      </div>

      <div className="tabs__date">Jun 2022</div>
      <div className="tabs">
        <div className="tabs__list">
          <div className="tabs__item">Wed 1</div>
          <div className="tabs__item-2">
            <div className="tabs__item__item fs-start">Usher Hall</div>
            <div className="tabs__item__item fs-center-tab">Edinburgh</div>
            <div className="tabs__item__item fs-end">Scotland</div>
          </div>
          <button className="tabs__item-3">
            <Link to={"/form"}>BUY NOW</Link>
          </button>
        </div>

        <div className="tabs__list">
          <div className="tabs__item">Thu 2</div>
          <div className="tabs__item-2">
            <div className="tabs__item__item fs-start">Albert Hall</div>
            <div className="tabs__item__item fs-center-tab">Manchester</div>
            <div className="tabs__item__item fs-end">UK</div>
          </div>
          <button className="tabs__item-3">
            <a className="tabs__item-3__sold-out" href="#">SOLD OUT</a>
          </button>
        </div>

        <div className="tabs__list">
          <div className="tabs__item">Sat 4</div>
          <div className="tabs__item-2">
            <div className="tabs__item__item fs-start">L'Aéronef</div>
            <div className="tabs__item__item fs-center-tab">Lille</div>
            <div className="tabs__item__item fs-end">France</div>
          </div>
          <button className="tabs__item-3">
            <a className="tabs__item-3__sold-out" href="#">SOLD OUT</a>
          </button>
        </div>

        <div className="tabs__list">
          <div className="tabs__item">Mon 6</div>
          <div className="tabs__item-2">
            <div className="tabs__item__item fs-start">Philharmonie de Paris</div>
            <div className="tabs__item__item fs-center-tab">Paris</div>
            <div className="tabs__item__item fs-end">France</div>
          </div>
          <button className="tabs__item-3">
            <a className="tabs__item-3__sold-out" href="#">SOLD OUT</a>
          </button>
        </div>

        <div className="tabs__list">
          <div className="tabs__item">Tue 7</div>
          <div className="tabs__item-2">
            <div className="tabs__item__item fs-start">Philharmonie de Paris</div>
            <div className="tabs__item__item fs-center-tab">Paris</div>
            <div className="tabs__item__item fs-end">France</div>
          </div>
          <button className="tabs__item-3">
            <a className="tabs__item-3__sold-out" href="#">SOLD OUT</a>
          </button>
        </div>

        <div className="tabs__list">
          <div className="tabs__item">Wed 8</div>
          <div className="tabs__item-2">
            <div className="tabs__item__item fs-start">Les Nuits de Fourvière</div>
            <div className="tabs__item__item fs-center-tab">Lyon</div>
            <div className="tabs__item__item fs-end">France</div>
          </div>
          <button className="tabs__item-3">
            <Link to={"/form"}>BUY NOW</Link>
            <a className="tabs__item-3__sold-out" href="#">SOLD OUT</a>
          </button>
        </div>

        <div className="tabs__list">
          <div className="tabs__item">Fri 10</div>
          <div className="tabs__item-2">
            <div className="tabs__item__item fs-start">Primavera Sound Festival</div>
            <div className="tabs__item__item fs-center-tab">Barcelona</div>
            <div className="tabs__item__item fs-end">Spain</div>
          </div>
          <button className="tabs__item-3">
            <Link to={"/form"}>BUY NOW</Link>
          </button>
        </div>

        <div className="tabs__list">
          <div className="tabs__item">Sun 12</div>
          <div className="tabs__item-2">
            <div className="tabs__item__item fs-start">Festival VYV Les Solidarites</div>
            <div className="tabs__item__item fs-center-tab">Dijon</div>
            <div className="tabs__item__item fs-end">France</div>
          </div>
          <button className="tabs__item-3">
            <Link to={"/form"}>BUY NOW</Link>
          </button>
        </div>

        <div className="tabs__list">
          <div className="tabs__item">Fri 24</div>
          <div className="tabs__item-2">
            <div className="tabs__item__item fs-start">La Magnifique Society</div>
            <div className="tabs__item__item fs-center-tab">Reims</div>
            <div className="tabs__item__item fs-end">France</div>
          </div>
          <button className="tabs__item-3">
            <Link to={"/form"}>BUY NOW</Link>
          </button>
        </div>

        <div className="tabs__list">
          <div className="tabs__item">Sat 25</div>
          <div className="tabs__item-2">
            <div className="tabs__item__item fs-start">TW Classic festival</div>
            <div className="tabs__item__item fs-center-tab">Werchter</div>
            <div className="tabs__item__item fs-end">Belgium</div>
          </div>
          <button className="tabs__item-3">
            <Link to={"/form"}>BUY NOW</Link>
          </button>
        </div>

        <div className="tabs__list">
          <div className="tabs__item">Mon 27</div>
          <div className="tabs__item-2">
            <div className="tabs__item__item fs-start">The Neumünster Abbaye</div>
            <div className="tabs__item__item fs-center-tab">Luxembourg City</div>
            <div className="tabs__item__item fs-end">Luxembourg</div>
          </div>
          <button className="tabs__item-3">
            <Link to={"/form"}>BUY NOW</Link>
          </button>
        </div>

        <div className="tabs__list">
          <div className="tabs__item">Wed 29</div>
          <div className="tabs__item-2">
            <div className="tabs__item__item fs-start">Open'er Festival</div>
            <div className="tabs__item__item fs-center-tab">Gdynia</div>
            <div className="tabs__item__item fs-end">Poland</div>
          </div>
          <button className="tabs__item-3">
            <Link to={"/form"}>BUY NOW</Link>
          </button>
        </div>

      </div>

      <div className="tabs__date">Jul 2022</div>
      <div className="tabs">
        <div className="tabs__list">
          <div className="tabs__item">Fri 1</div>
          <div className="tabs__item-2">
            <div className="tabs__item__item fs-start">Roskilde Festival</div>
            <div className="tabs__item__item fs-center-tab">Roskilde</div>
            <div className="tabs__item__item fs-end">Denmark</div>
          </div>
          <button className="tabs__item-3">
            <a className="tabs__item-3__sold-out" href="#">SOLD OUT</a>
          </button>
        </div>

        <div className="tabs__list">
          <div className="tabs__item">Tue 5</div>
          <div className="tabs__item-2">
            <div className="tabs__item__item fs-start">Poble Espanyol</div>
            <div className="tabs__item__item fs-center-tab">Barcelona</div>
            <div className="tabs__item__item fs-end">Spain</div>
          </div>
          <button className="tabs__item-3">
            <Link to={"/form"}>BUY NOW</Link>
          </button>
        </div>

        <div className="tabs__list">
          <div className="tabs__item">Wed 6</div>
          <div className="tabs__item-2">
            <div className="tabs__item__item fs-start">Noches del Botánico</div>
            <div className="tabs__item__item fs-center-tab">Madrid</div>
            <div className="tabs__item__item fs-end">Spain</div>
          </div>
          <button className="tabs__item-3">
            <Link to={"/form"}>BUY NOW</Link>
          </button>
        </div>

        <div className="tabs__list">
          <div className="tabs__item">Fri 8</div>
          <div className="tabs__item-2">
            <div className="tabs__item__item fs-start">Lisbon Coliseum</div>
            <div className="tabs__item__item fs-center-tab">Lisbon</div>
            <div className="tabs__item__item fs-end">Portugal</div>
          </div>
          <button className="tabs__item-3">
            <Link to={"/form"}>BUY NOW</Link>
          </button>
        </div>

        <div className="tabs__list">
          <div className="tabs__item">Mon 11</div>
          <div className="tabs__item-2">
            <div className="tabs__item__item fs-start">Festival de Nimes</div>
            <div className="tabs__item__item fs-center-tab">Nîmes</div>
            <div className="tabs__item__item fs-end">France</div>
          </div>
          <button className="tabs__item-3">
            <Link to={"/form"}>BUY NOW</Link>
          </button>
        </div>

        <div className="tabs__list">
          <div className="tabs__item">Tue 12</div>
          <div className="tabs__item-2">
            <div className="tabs__item__item fs-start">Montreux Jazz Festival</div>
            <div className="tabs__item__item fs-center-tab">Montreux</div>
            <div className="tabs__item__item fs-end">Switzerland</div>
          </div>
          <button className="tabs__item-3">
            <Link to={"/form"}>BUY NOW</Link>
          </button>
        </div>

        <div className="tabs__list">
          <div className="tabs__item">Thu 14</div>
          <div className="tabs__item-2">
            <div className="tabs__item__item fs-start">Fabrique Milano</div>
            <div className="tabs__item__item fs-center-tab">Milan</div>
            <div className="tabs__item__item fs-end">Italy</div>
          </div>
          <button className="tabs__item-3">
            <Link to={"/form"}>BUY NOW</Link>
          </button>
        </div>

        <div className="tabs__list">
          <div className="tabs__item">Sun 12</div>
          <div className="tabs__item-2">
            <div className="tabs__item__item fs-start">Festival VYV Les Solidarites</div>
            <div className="tabs__item__item fs-center-tab">Dijon</div>
            <div className="tabs__item__item fs-end">France</div>
          </div>
          <button className="tabs__item-3">
            <Link to={"/form"}>BUY NOW</Link>
          </button>
        </div>
      </div>
    </section>
  </>
}