import { useEffect } from 'react'
import './App.css'
import Home from "./pages/Home"
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "./redux/products";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SingleProductPage from './pages/SingleProductPage';
import Header from './components/Header';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path:"/product/:id",
    element:<SingleProductPage/>
  }
]);

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
      <Header/>
      <RouterProvider router={router} />
    </>
  )
}

export default App
