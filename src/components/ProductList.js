import React, { useEffect } from 'react'
import ProductItem from './ProductItem'
import { useDispatch, useSelector } from "react-redux";
import { setCard, deleteItemFromCard, addToCard } from '../redux/card'

function ProductList() {
	
	
	const dispatch = useDispatch();
	const card = useSelector(state => state.card);

	const addToCardHandle = (product) => {
		dispatch(setCard({id:product.id}));
	};

	useEffect(() => {
		console.log("updated card: ", card.card);
	}, [card]);

	const { products } = useSelector((state) => state.products);

	return (
		<>
			<div className="row">
				<div className="col-md-3 bg-primary">sol menü</div>
				<div className="col-md-9">
					<div className=" p-3">
						<ul className='row list-unstyled'>
							{products.map((product, i) => (
								<ProductItem  product={product} key={i} />
							))}
						</ul>
					</div>
				</div>
			</div>
		</>
	)
}

export default ProductList