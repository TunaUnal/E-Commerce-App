import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCard } from '../redux/card'

function AddToCardBtn({ product }) {
    const dispatch = useDispatch()
    return (
        <>
            <button className='btn btn-sm btn-success w-100' onClick={() => {dispatch(addToCard(product))}} >Add To Card</button>
        </>
    )
}

export default AddToCardBtn