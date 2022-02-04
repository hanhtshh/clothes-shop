import { useSelector } from "react-redux";
import CartComponent from "./component/cart";

export default function CartContainer(props){
    const cart=useSelector(state=>state.cart);
    console.log(cart);
    return <CartComponent setDisplayCart={props.setDisplayCart}/>
}