import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { xoagiohang } from "../../shared/store/actions";
import CartshowComponent from "./component/cartshow";

export default function CartshowContainer(props){
    const cart=useSelector(state=>state.cart);
    const dispatch=useDispatch();
    let tongtien=0;
    useMemo(()=>{
        tongtien=0;
        for(let i of cart){
            tongtien+= i.item.sale*i.number;
        }
    },[cart])
    const deleteitem=(item)=>{
        dispatch(xoagiohang({
            size:cart[item.target.id].size,
            _id:cart[item.target.id].item._id
        }))
    }
    return <div>
        <CartshowComponent cart={cart} tongtien={tongtien} deleteitem={deleteitem}/>
    </div>
}