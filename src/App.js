import { useEffect } from 'react'
import './App.css'
import Home from "./pages/Home"
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "./redux/products";
import { Routes, Route } from "react-router-dom";
import SingleProductPage from './pages/SingleProductPage';
import Header from './components/Header';
import Card from './pages/Card';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const dispatch = useDispatch();

  /*
  async function getProducts() {
    const products = await axios.get("https://fakestoreapi.com/products")
    return products.data
  }

  useEffect(() => {
    getProducts()
      .then(data => {
        dispatch(setProducts(data))
        console.log(data)
      })
  }, [])
  */

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="light"
/>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<SingleProductPage />} />
        <Route path="/card" element={<Card />} />
      </Routes>
      </>
  )
}

export default App
