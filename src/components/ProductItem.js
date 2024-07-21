import React, { useEffect } from 'react'
import Star from './Star'
import { useDispatch, useSelector } from 'react-redux'
import card, { setCard, deleteItemFromCard, addToCard } from '../redux/card'
import { Link } from 'react-router-dom'
import AddToCardBtn from './AddToCardBtn'

function ProductItem({ product }) {

    return (
        <>
            <li className='product-item col-sm-4 col-md-4 col-3 '>
                <div className="card p-2 mb-2" style={{ height: "30rem" }}>
                    <div className='d-flex align-items-center justify-content-center'>
                        <img src={product.image} className="card-img-top" alt="..." />
                    </div>
                    <div className="card-body d-flex flex-column justify-content-between p-0 pt-1">
                        <div className="product-info text-start">
                            <h6 className="card-title">{product.title}</h6>
                            <Star rating={product.rating.rate} count={product.rating.count} />
                            <span><b>{product.price} $</b></span>
                        </div>
                        <span className="btnGroup mb-1">
                            <Link to={"/product/" + product.id} className="btn btn-primary w-100 mb-2" >View Product</Link>
                            <AddToCardBtn product={product} />
                        </span>
                    </div>
                </div>
            </li>




            {/*<div className="card mb-3 p-0" style={{height:"200px"}}>
                <div className="row g-0">
                    <div className="col-md-4 m-0 p-0">
                        <img className='rounded-start some-class'  src={product.image} alt="" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body  text-start">
                            <h5 className="card-title">
                                {product.title}
                            </h5>
                            <p className="card-text">Category : {product.category}</p>
                            <div className="price d-flex justify-content-between align-items-center">
                                <p className="card-text h4 color-red m-0">{product.price}$</p>
                                <div className="btn-group">
                                    <button className="btn btn-sm btn-primary">View product</button>
                                    <button className="btn btn-sm btn-success">Add to cart</button>
                                </div>
                            </div>




                        </div>
                    </div>
                </div>
            </div>*/}
        </>
    )
}

export default ProductItem