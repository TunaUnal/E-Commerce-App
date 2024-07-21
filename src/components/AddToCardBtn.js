import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCard } from '../redux/card'
import { toast } from 'react-toastify'
function AddToCardBtn({ product }) {
    const dispatch = useDispatch()
    const [btn, setBtn] = useState(true)
    const clickHandle = () => {
        toast.success('Sepete Eklendi');

        dispatch(addToCard(product))
        setBtn(false)
        setTimeout(() => {
            setBtn(true)
        }, 1000);
    }
    return (
        <>
            <button className='btn btn-sm btn-success w-100' style={{ transition: "all 1s" }} onClick={clickHandle} >{btn ? "Add to Cart" : "Added !"}</button>
        </>
    )
}

export default AddToCardBtn