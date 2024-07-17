import { useState, useEffect } from 'react'
import ProductList from '../components/ProductList'
import axios from 'axios';

function Home() {


  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <h2 className='text-center' >Online Commerce App</h2>
        </div>
        <ProductList />
      </div>
    </>
  )
}

export default Home
