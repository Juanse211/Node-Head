import { ItemList } from "../components/item/itemList";

export const ItemListContainer = ({ greeting }) => {
  return <>
    <h1 className="fs-center fs-bleeding fs-title-m fs-color">SHOP</h1>
    <section className="container-shop">
      <div className="card__text">
        <h2 className="fs-title-s fs-center fs-color">FINE ART PRINTS</h2>
      </div>
      <ItemList />
    </section>
  </>
}