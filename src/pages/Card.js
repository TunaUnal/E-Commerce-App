import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Star from '../components/Star';
import { addToCard, increaseItem, decreaseItem } from '../redux/card';


function Card() {

  const dispatch = useDispatch()
  const { card } = useSelector(state => state.card);
  const [shownCard, setShownCard] = useState(false)
  const [total, setTotal] = useState(0)
  console.log(card)


  useEffect(() => {
    if (card.length != 0) {
      setShownCard(true)
    } else {
      setShownCard(false)
    }
    setTotal(0)
    card.map(p => {
      setTotal(total => total += (p.count * p.price))
    })
    setTotal(total => Math.round(total * 100) / 100)
  }, [card])




  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <h2>Card</h2>
          <div className="col-md-9">
            {!shownCard && <h1>Kartın boş</h1>}
            {shownCard && card.map((c, i) => (

              <div key={i} className="card w-100 p-4 my-3">
                <div className="row">
                  <div className="col-3">
                    <div className="">
                      <img src={c.image} className='card-img-top2' alt="" />
                    </div>

                  </div>
                  <div className="col-9">
                    <h6>{c.title}</h6>
                    <Star count={c.rating.count} rating={c.rating.rate} />
                    <p> {c.price} $ </p>
                    <div className="card-bottom d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button className="btn btn-primary" onClick={() => dispatch(decreaseItem(c))} >{c.count == 1 ? <i className='bi bi-trash'></i> : "-"}</button>
                        <button className="btn btn-primary"  >{c.count}</button>
                        <button className="btn btn-primary" onClick={() => dispatch(increaseItem(c))} >+</button>
                      </div>
                      <span className="price-info">
                        <b>{Math.round(c.count * c.price * 100)/ 100} $</b>
                      </span>
                    </div>
                  </div>
                </div>


              </div>
            ))}

          </div>
          <div className="col-md-3 mt-3">
            <div className="row">
              <div className="col">
                <ul class="list-group">
                  <li class="list-group-item">Total Price : </li>
                  <li class="list-group-item text-success"><b>{Math.round(total * 100) / 100} $</b></li>
                  <li class="list-group-item">Shipping:</li>
                  <li class="list-group-item text-success">FREE!</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card