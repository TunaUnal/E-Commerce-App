import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Star from '../components/Star';
import { addToCard, increaseItem, decreaseItem } from '../redux/card';


function Card() {


  const dispatch = useDispatch()

  const { card } = useSelector(state => state.card);
  console.log(card)
  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <h2>Card</h2>
          <div className="col-md-9">

            {card && card.map((c, i) => (

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
                        <b>{c.count * c.price} $</b>
                      </span>
                    </div>
                  </div>
                </div>


              </div>
            ))}

          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </>
  )
}

export default Card