import { useSelector } from "react-redux";
import CartComponent from "./component/cart";

export default function CartContainer(props){
    const cart=useSelector(state=>state.cart);
    const tongtien=()=>{
        let tong=0
        for(var i in cart){
            tong+=cart[i].item.price*cart[i].number;
        }
        return tong;
    }
    return <CartComponent tongtien={tongtien} cart={cart} setDisplayCart={props.setDisplayCart}/>
}