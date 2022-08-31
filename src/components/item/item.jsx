import ItemList from './itemList'

const Card = () => {  
  return <>
    <div class="card__aside">
      <img id="fa-${art.id}" class="card__image img__modal" src="../files/shop/${art.img}.jpg"/>
    </div>
    <div class="card__header">
      <h4 class="card__title fs-paragraph fs-color"></h4>
      <div class="card__subtitle">
        <span class="card__subtitle-money fs-paragraph fs-color">$ </span>
      </div>
    </div>
  </>
}

export default Card