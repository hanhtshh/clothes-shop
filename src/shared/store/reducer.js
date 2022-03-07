export function reducer(state, action) {
    if(action.type=='timkiem'){
       return{
          ...state,
          timkiem:action.ten,
       }
    }
    else if(action.type=='user'){
       return{
          ...state,
          user:{
            name: action.name,
            email: action.email,
            address: action.address,
            telephone: action.telephone,
            admin:action.admin
          }
       }
    }
    else if (action.type=='postitem'){
       return{
          ...state,
          item:{
             _id:action._id,
             name:action.name,
             image:action.image,
             describes:action.describes,
             price:action.price,
             sale:action.sale,
             size:action.size,
             category:action.category
          }
       }
    }
    else if (action.type=='themvaogiohang'){
       let a=state.cart.filter(item=>(item.item._id!=action.item._id || item.size!=action.size));
       if(a.length==state.cart.length){
          return {
             ...state,cart:[...state.cart,{item:action.item,number:action.number,size:action.size}]
          }
       }
       else{
          let b=state.cart.filter(item=>(item.item._id==action.item._id && item.size==action.size));
          return {
             ...state,cart:[...a,{item:action.item,number:b[0].number+action.number,size:action.size}]
          }
       }
    }
    
    else if(action.type=='xoagiohang'){
       return {
          ...state,cart:state.cart.filter(item=>(item.item._id!=action.item_id || item.size!=action.size))
       }
    }
    else if(action.type=='refreshcart'){
       return{
          ...state,cart:[],user:{
             ...state.user,
             name:action.name,
             address:action.address,
             email:action.email,
             telephone:action.telephone
          }
       }
    }
    else{
      return state;
   }
 }