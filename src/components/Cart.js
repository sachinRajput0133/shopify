import React from 'react'
import { CartState } from '../Context/Context'
import './Cart.css'
import {useState,useEffect} from 'react'
import { Scrollbars } from 'react-custom-scrollbars-2';
import { useNavigate } from 'react-router-dom';
const Cart = () => {

const {state,dispatch}=CartState()
// console.log(state.cart)
const[total,setTotal]=useState(0)
const navigate=useNavigate()

// const useGetLocalItems=()=>{
//   let localCart=localStorage.getItem('cartItems')
//   if(localCart){
//     return  JSON.parse(localCart)
//   }else {
//     return []
//   }
      
// }


const changeQuantity=(id,qty)=>{
  dispatch({
    type:"CHANGE_QUANTITY",
    payload:{
      id,
      qty,
    },
  })
}

const removeFromCart=(id)=>{
  dispatch({
    type:"REMOVE_FROM_CART",
    payload:id
 
    
  })
}






useEffect(()=>{
setTotal(state.cart.reduce((acc,curr)=>acc+Number(curr.price)*curr.qty ,0 )) 

},[state.cart])

useEffect(()=>{
  localStorage.setItem('cartItems',JSON.stringify(state.cart))
},[state.cart])

  return (
    <div className='cart-wrapper'>
        <div className="cartstatus" style={{display: 'flex',
    justifyContent: 'center',fontSize:'2rem'}} >
      {
          state.cart.length? <span>Cart Products  </span> : <span>Cart is empty!! Add Products..</span>
          
          }

        </div>
      <div className="cart-box">
          <div className="cart-scroll">
      <Scrollbars>

         
     
       {
        state.cart.map((c)=>{
          return (
           <div className="single-cart" key={c.id}>

            <div className="image">

            <img style={{width:'50px',height:'60px',objectFit:'cover'}} src={c.thumbnail} alt={c.title} />
            </div>
            
            <div className="title align-description">

            <span >{c.title}</span>
            </div>
           

          
             <div className="qty align-description">

           
            <button onClick={()=>changeQuantity(c.id,c.qty-1)}  >-</button>
            <span  style={{alignSelf:'center',justifyContent:'center'}}  >{c.qty}</span>
            <button onClick={()=>changeQuantity(c.id,c.qty+2)} >+</button>
             </div>

         <div className="price align-description">
             <span > RS {c.price}</span>

         </div>
            <div className='align-description' >

            <button onClick={()=>removeFromCart(c.id)} >Remove</button>
            </div>



           </div>
          )

        })
       }
        </Scrollbars>
       <div className="cart-summery">
       <div className="clear-cart">

<button onClick={()=>dispatch({
type:"CLEAR_CART"
})} >Clear Cart</button> 
</div>
<div className="check-out">
       <div className="cart-element">
        <div className="cart-total">
          <span>Cart Total:</span>
        </div>
        <div className="total">
          RS&nbsp;{total}
        </div>

       </div>
       <div className="check">
        <button  onClick={()=>navigate('/shopify')} >Check Out</button>
       </div>

</div>
      

       </div>
        </div>
       </div>
    </div>
  )
}

export default Cart
