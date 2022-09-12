import { Link } from "react-router-dom"

export const fineArt = [
  { "id": 0, "name": "RESIDENTIAL NEMESIS", "price": 38, "price28": 78, "price40": 123, "amount": 0, "img": "../files/shop/1.jpg" },
  { "id": 1, "name": "THIS MIGHT BE A COVER", "price": 38, "price28": 78, "price40": 123, "amount": 0, "img": "../files/shop/2.jpg" },
  { "id": 2, "name": "EARTHQUAKE", "price": 38, "price28": 78, "price40": 123, "amount": 0, "img": "../files/shop/3.jpg" },
  { "id": 3, "name": "WIREFRAME + AUSTRIA3", "price": 38, "price28": 78, "price40": 123, "amount": 0, "img": "../files/shop/4.jpg" },
  { "id": 4, "name": "ICE AGE COMIG", "price": 38, "price28": 78, "price40": 123, "amount": 0, "img": "../files/shop/5.jpg" },
  { "id": 5, "name": "GET OUT BEFORE SATURDAY", "price": 38, "price28": 78, "price40": 123, "amount": 0, "img": "../files/shop/6.jpg" },
  { "id": 6, "name": "HOTELS AND A GLACIER", "price": 38, "price28": 78, "price40": 123, "amount": 0, "img": "../files/shop/7.jpg" },
  { "id": 7, "name": "TARGET 80S LANDSCAPE", "price": 38, "price28": 78, "price40": 123, "amount": 0, "img": "../files/shop/8.jpg" },
  { "id": 8, "name": "COCAINE DISKO ALL YOU LIKE", "price": 38, "price28": 78, "price40": 123, "amount": 0, "img": "../files/shop/9.jpg" },
  { "id": 9, "name": "ICE AGE COMING ICE AGE COMING", "price": 38, "price28": 78, "price40": 123, "amount": 0, "img": "../files/shop/10.jpg" },
  { "id": 10, "name": "27 WOODEN WOODS", "price": 38, "price28": 78, "price40": 123, "amount": 0, "img": "../files/shop/11.jpg" },
  { "id": 11, "name": "GMT LAND BEING INVADED POINTY", "price": 38, "price28": 78, "price40": 123, "amount": 0, "img": "../files/shop/12.jpg" },
  { "id": 12, "name": "BURNING CITY GOOD VERSION", "price": 38, "price28": 78, "price40": 123, "amount": 0, "img": "../files/shop/13.jpg" },
  { "id": 13, "name": "LAND OF FREEDOM™", "price": 38, "price28": 78, "price40": 123, "amount": 0, "img": "../files/shop/14.jpg" },
  { "id": 14, "name": "TWO TOWERS", "price": 38, "price28": 78, "price40": 123, "amount": 0, "img": "../files/shop/15.jpg" },
  { "id": 15, "name": "ITS GROOVY BABY", "price": 38, "price28": 78, "price40": 123, "amount": 0, "img": "../files/shop/16.jpg" },
  { "id": 16, "name": "WILL YOU COME BACK TO ME", "price": 38, "price28": 78, "price40": 123, "amount": 0, "img": "../files/shop/17.jpg" },
  { "id": 17, "name": "MERGER", "price": 38, "price28": 78, "price40": 123, "amount": 0, "img": "../files/shop/18.jpg" },
  { "id": 18, "name": "REALLY HAPPENING", "price": 38, "price28": 78, "price40": 123, "amount": 0, "img": "../files/shop/19.jpg" },
  { "id": 19, "name": "TARGET LAND", "price": 38, "price28": 78, "price40": 123, "amount": 0, "img": "../files/shop/20.jpg" },
  { "id": 20, "name": "MINOS WALL I", "price": 38, "price28": 78, "price40": 123, "amount": 0, "img": "../files/shop/21.jpg" },
  { "id": 21, "name": "RMINOS WALL II", "price": 38, "price28": 78, "price40": 123, "amount": 0, "img": "../files/shop/22.jpg" },
  { "id": 22, "name": "MINOS WALL III", "price": 38, "price28": 78, "price40": 123, "amount": 0, "img": "../files/shop/23.jpg" }
]
export const Item = (fineArt) => {
  return (
    <div className="card">
      <div className="card__aside">
        <Link to={`/shop/detail/${fineArt.art.id}`}>
          <img className="card__image" src={fineArt.art.img} alt="Fine Art" />
        </Link>
      </div>
      <div className="card__header">
        <h4 className="card__title fs-paragraph fs-color">{fineArt.art.name}</h4>
        <div className="card__subtitle">
          <span className="card__subtitle-money fs-paragraph fs-color">$ {fineArt.art.price}</span>
        </div>
      </div>
      <Link to={`/shop/detail/${fineArt.art.id}`}>
        <button>VIEW PRODUCT</button>
      </Link>
    </div>
  )
}