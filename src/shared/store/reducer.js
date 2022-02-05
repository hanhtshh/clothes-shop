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
       let a=state.cart.filter(item=>item.item._id!=action.item._id);
       if(a.length==state.cart.length){
          return {
             ...state,cart:[...state.cart,{item:action.item,number:action.number}]
          }
       }
       else{
          let b=state.cart.filter(item=>item.item._id==action.item._id);
          return {
             ...state,cart:[...a,{item:action.item,number:b[0].number+action.number}]
          }
       }
    }
    else{
       return state;
    }
 }