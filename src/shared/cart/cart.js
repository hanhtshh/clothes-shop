import CartComponent from "./component/cart";

export default function CartContainer(props){
    return <CartComponent setDisplayCart={props.setDisplayCart}/>
}