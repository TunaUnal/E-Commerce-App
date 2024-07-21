import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Star from '../components/Star'
import AddToCardBtnWithCount from '../components/AddToCardBtnWithCount'

export default function SingleProductPage() {
    const { id } = useParams()
    const { products } = useSelector(state => state.products)
    const { card } = useSelector(state => state.card)

    useEffect(() => {
        console.log(card)
    }, [card])
    
    const product = products.find(p => p.id == id)

    useEffect(() => {
      //console.log(product)
    }, [])
    
    return (
        <>
            {product && <div className="container h-100">
                <div className="row mt-5">
                    <div className="col-md-6 col-sm-12">
                        <div className="product-img">
                            <img src={product.image} style={{ objectFit: "contain", maxHeight: "30rem" }} className='w-100' alt="" />
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 d-flex flex-column justify-content-between">
                        <div className="product-info">
                            <h3>{product.title}</h3>
                            <p className="product-description"> {product.description} </p>
                            <p className='mb-0'>{product.category}</p>
                            <Star rating={product.rating.rate} count={product.rating.count} />
                            <b className="mb-0 price">
                                {product.price} $
                            </b>
                        </div>
                        <div className="button">
                            <AddToCardBtnWithCount product={product} />
                        </div>
                    </div>
                </div>
            </div>}




        </>
    )
}
