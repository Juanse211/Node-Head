import { GetItem } from "../components/item/itemDetail"
import '../css/main.css';

export const ItemDetailContainer = () => {
  return(<>
    <h1 className="fs-center fs-bleeding fs-title-m fs-color">SHOP</h1>
    <section className="container-shop">
      <div className="card__text">
          <h2 className="fs-title-s fs-center fs-color">FINE ART PRINTS</h2>
      </div>
        <GetItem />
    </section>
    </>
  )
}