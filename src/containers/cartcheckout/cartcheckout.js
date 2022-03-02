import CartCheckoutComponent from "./component/cartcheckout";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
export default function CartCheckoutContainer(props){
    const user=useSelector(state=>state.user);
    const cart=useSelector(state=>state.cart);
    const [name,setName]=useState(user.name);
    const [email,setEmail]=useState(user.email);
    const [telephone,setTelephone]=useState(user.telephone);
    const [address,setAddress]=useState(user.address);
    const handleName=(item)=>{
        setName(item.target.value);
    }
    const handleEmail=(item)=>{
        setEmail(item.target.value);
    }
    const handleTelephone=(item)=>{
        setTelephone(item.target.value);
    }
    const handleAddress=(item)=>{
        setAddress(item.target.value);
    }
    const tongtien=()=>{
        let tong=0;
        for(let i of cart){
            tong+=i.item.sale*i.number
        }
        return tong;
    }
    return <CartCheckoutComponent tongtien={tongtien} handleAddress={handleAddress} address={address} handleTelephone={handleTelephone} telephone={telephone} handleEmail={handleEmail} email={email} handleName={handleName} name={name} user={user} cart={cart}/>
}