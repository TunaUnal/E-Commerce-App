import React from 'react'

function Star({ count, rating }) {
    return (
        <>
            <p className='star'>

                {[...Array(Math.floor(rating))].map((e,i)=><i key={i} className='bi bi-star-fill text-warning'></i>)}
                {[...Array(5 - Math.floor(rating))].map((e,i)=><i key={i} className='bi bi-star'></i>)}

                ({count})
            </p>




        </>
    )
}

export default Star