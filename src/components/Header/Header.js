import React from 'react'
import { Badge, Button,  FormControl} from 'react-bootstrap'
import './Header1.css'
// import {useState , useEffect} from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import { CartState } from '../../Context/Context'
// import { debounce } from 'lodash'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'
const Header = () => {
  const {state, productDispatch}=CartState();
  



// const filterProducts= state.products.filter((p)=> p.title.toLowerCase().includes(search.toLowerCase()) )


// const handelSearch=  debounce((input)=>{
//   dispatch({
//     type:"SEARCH_PRODUCTS",
//     payload:input,
//   })
// },100)
// const handelSearch=  debounce((input)=>{
//   productDispatch({
//     type:"SEARCH_PRODUCTS",
//     payload:input,
//   })
// },100)



  return (
 <div className='nave-bar' bg='dark' variant='dark' style={{height:80}}  >
 <div className='container'  >
    <div>
      <Link to='/shopify'> Shoping Cart </Link>
    </div>
    
      <div className="inpit">

  <FormControl   onChange={(e)=> productDispatch({
    type:"SEARCH_PRODUCTS",
    payload:e.target.value,
  })} style={{maxwidth:500}}  placeholder='search product ' >

  </FormControl>
      </div>

<div className="logo">
<Link  to='shopify/cart' align='right'   >
      <Button>
    <FaShoppingCart/>
    <Badge  >{state.cart.length}</Badge>


      </Button>


  
</Link>
  
</div>

 </div>

 </div>
  )
}

export default Header
