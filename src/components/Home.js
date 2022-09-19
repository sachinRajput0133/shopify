import React from 'react'
import { CartState } from '../Context/Context'
import './Home.css'
import {useEffect} from 'react'
const Home = () => {

  const  { state ,dispatch  }=CartState()
// console.log(state)

const searchProducts= ()=> state.products.filter((p)=>p.title.toLowerCase().includes(state.search.toLowerCase())    ) 

console.log(searchProducts())




  return (
    <div className='product-wrapper'  >
          {  
            searchProducts().map((prod)=>{

              return (
                <div    className="product" key={prod.id}>
                    <img src={prod.thumbnail} alt={prod.title}  style={{height:'200px',objectFit:'cover'}}/>
                    <div className="description">
                      <span>{prod.title}  </span>
                      <span>{prod.price}</span>
                    </div>


                    {
                      state.cart.some((c)=>c.id ===prod.id )? (<button className='remove-cart' onClick={()=>dispatch({
                        type:"REMOVE_FROM_CART",
                        payload:prod.id,
                      })}  >REMOVE FROM CART </button>):
                      ( <button  onClick={()=> dispatch({
                        type:"ADD_TO_CART",
                        payload:{
                          id:prod.id,
                          thumbnail:prod.thumbnail,
                          title:prod.title,
                          price:prod.price,
                          qty:1,

                        }
                      }) }   style={{fontSize:'14px',background:'green',padding:'5px',border:'0',borderRadius:'10px',color:'white'}} > ADD TO CART </button> )
                    }
                     
                    
                </div>
              )
            })
          }
      
    </div>
  )
}

export default Home
