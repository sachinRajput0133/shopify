import React from 'react'
import { Badge, Button, Container, Dropdown, FormControl, Nav, Navbar } from 'react-bootstrap'
import './Header1.css'
import {useState , useEffect} from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import { CartState } from '../../Context/Context'
import { debounce } from 'lodash'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'
const Header = () => {
  const {state,dispatch , productDispatch}=CartState();
  



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
 <Navbar className='nave-bar' bg='dark' variant='dark' style={{height:80}}  >
 <Container  >
    <Navbar.Brand>
      <Link to='/shopify'> Shoping Cart </Link>
    </Navbar.Brand>
<Navbar.Text>
  <FormControl   onChange={(e)=> productDispatch({
    type:"SEARCH_PRODUCTS",
    payload:e.target.value,
  })} style={{width:500}}  placeholder='search product ' >

  </FormControl>
</Navbar.Text>
<Nav  >
<Link  to='/cart' align='right'   >
      <Button>
    <FaShoppingCart/>
    <Badge  >{state.cart.length}</Badge>


      </Button>


  
</Link>
</Nav>
 </Container>

 </Navbar>
  )
}

export default Header