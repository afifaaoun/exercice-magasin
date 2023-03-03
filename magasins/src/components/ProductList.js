import React, { useEffect } from 'react'
import { fetchProduct } from '../api/product';
import ProductCard from './ProductCard'
import {useDispatch,useSelector} from 'react-redux'
import { setProduct } from '../store/ProductSlice';


const ProductList = () => {
  const dispatch=useDispatch();
  const Products=useSelector((state)=>state.product);
// console.log('liste de produits',Products);
  const getProduct=async()=>{
    const result= await fetchProduct(); // fetch issu de data elli ml database
    console.log(result);
    dispatch(setProduct(result.productList)) //setProduct hya l action 
    // result.productList  ml database
  }

  useEffect(()=>{
    getProduct()
  },[])

  //kif t3ml add wala update t3mellek direct changement fl data base


  return (
    <div>
        <h2>list of product</h2> 
        {Products.map((el,key)=>{
          return(
          <div key={key}>
          <ProductCard carte={el}/>
        </div>
        )})
        }
    </div>
  )
}

export default ProductList