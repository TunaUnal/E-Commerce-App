import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCard, decreaseItemFromCard } from '../redux/card'
import { toast } from 'react-toastify'

function AddToCardBtnWithCount({ product }) {
    const dispatch = useDispatch()
    const [count, setCount] = useState(1)
    const [btn, setBtn] = useState(true)

    const clickHandle = () => {
        dispatch(addToCard({ ...product, count: count }))
        setBtn(false)
        toast.success('Sepete Eklendi');
        setTimeout(() => {
            setBtn(true)
        }, 1000);
    }

    return (
        <>
            <div className="btn-group">
                <button className='btn btn-primary' disabled={count <= 1} onClick={() => { setCount(count - 1) }}>-</button>
                <button className='btn btn-primary' >{count}</button>
                <button className='btn btn-primary' onClick={() => { setCount(count + 1) }}>+</button>
            </div>
            <button className='btn btn-success mx-3' onClick={clickHandle} >{btn ? "Add to Card" : "Added!"}</button>
        </>
    )
}

export default AddToCardBtnWithCount