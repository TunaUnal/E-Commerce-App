import React, { useEffect } from 'react'
import ProductItem from './ProductItem'
import { useDispatch, useSelector } from "react-redux";

function ProductList() {
    console.log("control")

    const { products } = useSelector((state) => state.products);

    return (
        <>
            <div className="row">
                <div className="col-md-3 bg-primary">sol menü</div>
                <div className="col-md-9">
                    <div className=" p-3">
                        <ul className='row list-unstyled'>
                            {products.map((product, i) => (
                                <ProductItem product={product} key={i} />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductList