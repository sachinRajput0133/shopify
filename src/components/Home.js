import React from 'react'
import { CartState } from '../Context/Context'
import './Home.css'
// import {useEffect,useState} from 'react'
import { Form } from 'react-bootstrap'
import Rating from './Rating'

const Home = () => {
  // const [rate,setRate]=useState(0)
  const  { state ,dispatch  }=CartState()
  const {productDispatch,productState}=CartState()

const {sort , search ,byRating }=productState




const filterProducts=()=>{
  let filterProduct=state.products;
 
  if(sort){
     filterProduct=     filterProduct.sort((a,b)=>
       sort === "lowToHigh" ? a.price - b.price : b.price - a.price
    )
   
  }

  if(byRating){
    filterProduct=   filterProduct.filter((p)=>p.rating >= byRating )
  }
  if(search){
     filterProduct =    filterProduct.filter((p)=>p.title.toLowerCase().includes(search.toLowerCase())) 
    
}
return filterProduct;
}






  return (
    <div className="containerr"style={{display:'flex' ,background:"grey"}} >
         <div className="sidebar" style={{display:'flex',flexDirection:'column',width:"20%" ,color:'white',alignItem:'center',padding:'40px 20px', }}>
          
          <div className="wrap" style={{padding:"0 10px",backgroundColor:"#343a40"}}  >
            <div className="filters" style={{height:'40vh' ,background:'#343a40',padding:'4px ', display:'flex',flexDirection:'column', justifyContent:'space-around'}} >

          <div>Filter Products</div>
           <Form.Check inline label='Price low to high' name='group1' type='radio' id='inline1'onChange={()=>productDispatch({
            type:"SORT_BY_PRICE",
            payload:"lowToHigh"
           })}   checked={ sort=== "lowToHigh" ? true :  false }    />

          
          <div className="decending">
          <Form.Check inline  label='Price high to low' name='group1' type='radio' id='inline2' onChange={()=>productDispatch({
            type:"SORT_BY_PRICE",
            payload:"highToLow"
           })}   checked={ sort=== "highToLow" ? true :  false }   />
          </div>
          {/* <div className="rating" style={{display:'flex'}}>
            <span>Rating:</span>
             <Rating  rate={byRating} onClick={(i)=>productDispatch({
              type:"CHANGE_Rating",
              payload:i + 1,
            })}  style={{cursor:'pointer'}} />
          </div> */}
            <div className="clear-filter">
           
           <button onClick={()=>productDispatch({
            type:"CLEAR_FILTER",
            
           })}    >Clear Filter</button>
         </div>
            </div>
          </div>
    
         </div>
     
    <div className='product-wrapper'  >
          {  
            filterProducts().map((prod)=>{

              return (
                <div    className="product" key={prod.id}>
                    <img src={prod.thumbnail} alt={prod.title}  style={{height:'200px',objectFit:'cover'}}/>
                    <div className="description">
                      <span>{prod.title}  </span>
                      <span>{prod.price}</span>
                    
                    </div>
                    <div className="rating">
                      <Rating  rate={prod.rating}   ></Rating>
                    </div>


                    {
                      state.cart.some((c)=>c.id ===prod.id )? (<button onClick={()=>dispatch({
                        type:"REMOVE_FROM_CART",
                        payload:prod.id,
                      })}   style={{fontSize:'14px',background:'red',padding:'5px',border:'0',borderRadius:'10px',color:'white' }}>REMOVE FROM CART </button>):
                      ( <button  onClick={()=> dispatch({
                        type:"ADD_TO_CART",
                        payload:prod,
                         

                        
                      }) }   style={{fontSize:'14px',background:'green',padding:'5px',border:'0',borderRadius:'10px',color:'white'}} > ADD TO CART </button> )
                    }
                     
                    
                </div>
              )
            })
          }
      </div>
    </div>
  )
}

export default Home
