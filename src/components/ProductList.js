import React, { useEffect, useState } from 'react'
import ProductItem from './ProductItem'
import { useDispatch, useSelector } from "react-redux";
import { setCard, deleteItemFromCard, addToCard } from '../redux/card'
import { toast } from 'react-toastify';
import LeftMenu from './LeftMenu';
function ProductList() {


	const dispatch = useDispatch();
	const { card } = useSelector(state => state.card);

	const addToCardHandle = (product) => {
		dispatch(setCard({ id: product.id }));
	};

	useEffect(() => {
		if (card.length != 0) {
			toast.success('Sepet Güncellendi');
		}
	}, [card]);

	const { products, categories } = useSelector((state) => state.products);

	const [checked, setChecked] = useState(categories.map(c => { return { category: c, isClick: true } }))
	const [shownItems, setShownItems] = useState(products)

	useEffect(() => {
		const isChecked = checked.map(c => {
			if (c.isClick) {
				return c.category
			}
		})
		const newdata = (products.filter(p => isChecked.includes(p.category)))
		setShownItems(newdata)
	}, [checked])

	return (
		<>
			<div className="row">
				<div className="col-md-3"><LeftMenu checked={checked} setChecked={setChecked} /></div>
				<div className="col-md-9">
					<div className=" p-3">
						<ul className='row list-unstyled'>
							{shownItems.map((product, i) => (
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