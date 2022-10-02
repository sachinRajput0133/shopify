import axios from 'axios';
import React from 'react'
import { cartReducer, productReducer } from './Reducers';
import { createContext, useContext,useEffect,useReducer} from "react";

const  productCart=createContext()

const Context = ({children}) => {
//  const [products,setProducts]=useState([]);
let localCartItems=JSON.parse(localStorage.getItem('cartItems'))  || [] ; 

//  const [cart,setCart]=useState([]);
 const [state,dispatch]=useReducer(cartReducer,{
      products:[],
      cart:localCartItems,
      search:'',
 })
const [productState,productDispatch]=useReducer(productReducer,{
  sort:'',
  search:'',
  byRating:0,


})
  const fetchData=async()=>{
const res =await axios.get('https://dummyjson.com/products');
  //  console.log(res.data.products)
// setProducts(res.data.products)
     dispatch({
      type:"ADD_Products",
      payload:res.data.products
     })

  }
  // console.log(state.products)
  useEffect(()=>{

  fetchData()


  },[])

  useEffect(()=>{
    localStorage.setItem('cartItems',JSON.stringify(state.cart))
  },[state.cart])



  return  <productCart.Provider value={{state,dispatch ,productDispatch,productState}}   >
             {children}
    </productCart.Provider>
  
}


// export const cartState=()=>{
//     return  useContext(calculation)
// }


export default Context

export const CartState=()=>{
  return useContext(productCart)
}
