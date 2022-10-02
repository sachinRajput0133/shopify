import React from 'react'
import {AiFillStar, AiOutlineStar} from 'react-icons/ai'


const Rating = ({rate,style,onClick}) => {
  return (
    <div>
      {
       [...Array(5)].map((_,i)=>{
        return (
       <span key={i} style={style}  onClick={()=>onClick(i)} >
           {
            rate > i ? (<AiFillStar/>  ):( <AiOutlineStar/>)
           }
       </span>

        )
       })

      }
    </div>
  )
}

export default Rating
