import { useDispatch, useSelector } from "react-redux";
import { xoagiohang } from "../store/actions";
import CartComponent from "./component/cart";

export default function CartContainer(props){
    const cart=useSelector(state=>state.cart);
    const dispatch=useDispatch();
    const tongtien=()=>{
        let tong=0
        for(var i in cart){
            tong+=cart[i].item.sale*cart[i].number;
        }
        return tong;
    }
    const xoasanpham=(item)=>{
        dispatch(xoagiohang({_id:cart[item.target.id].item._id,size:cart[item.target.id].size}));
    }
    return <CartComponent tongtien={tongtien} cart={cart} xoasanpham={xoasanpham} setDisplayCart={props.setDisplayCart}/>
}