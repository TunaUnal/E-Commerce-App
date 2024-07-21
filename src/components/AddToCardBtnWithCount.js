import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCard, decreaseItemFromCard } from '../redux/card'

function AddToCardBtnWithCount({ product }) {
    const dispatch = useDispatch()
    const [count, setCount] = useState(1)

    return (
        <>
            <div className="btn-group">
                <button className='btn btn-primary' disabled={count <= 1} onClick={() => { setCount(count - 1) }}>-</button>
                <button className='btn btn-primary' >{count}</button>
                <button className='btn btn-primary' onClick={() => { setCount(count + 1) }}>+</button>
            </div>
            <button className='btn btn-success' onClick={()=>dispatch(addToCard({...product, count:count}))} >Add c</button>
        </>
    )
}

export default AddToCardBtnWithCount