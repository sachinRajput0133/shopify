

export const cartReducer=(state,action)=>{
  


   

    switch(action.type){
    
         case "ADD_Products":return {...state,products:action.payload};
         case "ADD_TO_CART":return { ...state,cart:[...state.cart, {...action.payload ,qty:1 }]};
         case "REMOVE_FROM_CART":return{...state,cart:state.cart.filter((c)=> c.id !== action.payload )};
         case "CHANGE_QUANTITY":return{...state,cart:state.cart.filter((c)=>c.id===action.payload.id ? c.qty = action.payload.qty:c.qty )}
        //  case "REMOVE_FROM_CART":return{...state,cart:state.cart.filer((c)=>c.id ===action.payload)}
         case "CLEAR_CART":return{...state,cart:[]};
        //  case  "SEARCH_PRODUCTS" : return {...state,search:action.payload}
        default:
         return state;
    }

}
export const productReducer=(state,action)=>{
    switch(action.type){
        case "SORT_BY_PRICE":return {...state,sort:action.payload};
        case  "SEARCH_PRODUCTS" : return {...state,search:action.payload};
        case "CHANGE_Rating" :return{...state,byRating:action.payload}
        case "CLEAR_FILTER":return { sort:'' , search:''}
        default:
            return state;
    }
}