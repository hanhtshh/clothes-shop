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
       console.log(state)
       const a=state.cart.filter(item=>item.item._id==action.item._id);
       if(a.length==0){
         return{
            ...state,cart:[...state.cart,{item:action.item,number:action.number}]
         }
       }
       else{
          return{
             ...state,cart:state.cart.filter(item=>item.item._id!=action.item._id)+[{...a[0],number:a[0].number+action.number}]
          }
       }
    }
    else{
       return state;
    }
 }