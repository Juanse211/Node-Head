export const fineArt =[
{"id" :0, "name": "RESIDENTIAL NEMESIS", "price": 38, "price28": 78, "price40": 123, "amount": 0, "img":1},
{"id" :1, "name": "THIS MIGHT BE A COVER", "price": 38, "price28": 78, "price40": 123, "amount": 0, "img":2},
{"id" :2, "name": "EARTHQUAKE", "price": 38, "price28": 78, "price40": 123, "amount": 0, "img":3},
{"id" :3, "name": "WIREFRAME + AUSTRIA3", "price": 38, "price28": 78, "price40": 123, "amount": 0, "img":4},
{"id" :4, "name": "ICE AGE COMIG", "price": 38, "price28": 78, "price40": 123, "amount": 0, "img":5},
{"id" :5, "name": "GET OUT BEFORE SATURDAY", "price": 38, "price28": 78, "price40": 123, "amount": 0, "img":6},
{"id" :6, "name": "HOTELS AND A GLACIER", "price": 38, "price28": 78, "price40": 123, "amount": 0, "img":7},
{"id" :7, "name": "TARGET 80S LANDSCAPE", "price": 38, "price28": 78, "price40": 123, "amount": 0, "img":8},
{"id" :8, "name": "COCAINE DISKO ALL YOU LIKE", "price": 38, "price28": 78, "price40": 123, "amount": 0, "img":9},
{"id" :9, "name": "ICE AGE COMING ICE AGE COMING", "price": 38, "price28": 78, "price40": 123, "amount": 0, "img":10},
{"id" :10, "name": "27 WOODEN WOODS", "price": 38, "price28": 78, "price40": 123, "amount": 0, "img":11},
{"id" :11, "name": "GMT LAND BEING INVADED POINTY", "price": 38, "price28": 78, "price40": 123, "amount": 0, "img":12},
{"id" :12, "name": "BURNING CITY GOOD VERSION", "price": 38, "price28": 78, "price40": 123, "amount": 0, "img":13},
{"id" :13, "name": "LAND OF FREEDOM™", "price": 38, "price28": 78, "price40": 123, "amount": 0, "img":14},
{"id" :14, "name": "TWO TOWERS", "price": 38, "price28": 78, "price40": 123, "amount": 0, "img":15},
{"id" :15, "name": "ITS GROOVY BABY", "price": 38, "price28": 78, "price40": 123, "amount": 0, "img":16},
{"id" :16, "name": "WILL YOU COME BACK TO ME", "price": 38, "price28": 78, "price40": 123, "amount": 0, "img":17},
{"id" :17, "name": "MERGER", "price": 38, "price28": 78, "price40": 123, "amount": 0, "img":18},
{"id" :18, "name": "REALLY HAPPENING", "price": 38, "price28": 78, "price40": 123, "amount": 0, "img":19},
{"id" :19, "name": "TARGET LAND", "price": 38, "price28": 78, "price40": 123, "amount": 0, "img":20},
{"id" :20, "name": "MINOS WALL I", "price": 38, "price28": 78, "price40": 123, "amount": 0, "img":21},
{"id" :21, "name": "RMINOS WALL II", "price": 38, "price28": 78, "price40": 123, "amount": 0, "img":22},
{"id" :22, "name": "MINOS WALL III", "price": 38, "price28": 78, "price40": 123, "amount": 0, "img":23}
]

export const Item = (fineArt) => {  
  return <>
    <div class="card__header">
      <h5>{fineArt.art.name}</h5>
      <span>$ {fineArt.art.price}</span>
    </div>
  </>
}