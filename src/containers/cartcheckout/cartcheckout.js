import CartCheckoutComponent from "./component/cartcheckout";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useState } from "react";
import { refreshcart } from "../../shared/store/actions";
import { useHistory } from "react-router-dom";
export default function CartCheckoutContainer(props){
    const dispatch=useDispatch();
    const history=useHistory
    const user=useSelector(state=>state.user);
    const cart=useSelector(state=>state.cart);
    const [success,setSuccess]=useState(false);
    const [fall,setFall]=useState(false);
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
    const dathang=()=>{
        if(user.admin==-1){
            alert("Bạn cần phải đăng nhập để thanh toán!");
        }
        else{
            const date=new Date();
            axios.post('https://clothesnodejs-production.up.railway.app/oder',{
                telephone:telephone,
                address:address,
                cost:tongtien(),
                oder_date:date.getDay()+"/"+date.getMonth()+"/"+date.getFullYear(),
                oder_list:cart.map(item=>{
                    return {
                        item:item.item._id,
                        quantity:item.number,
                        size:item.size
                    }
                })
            },{
                headers:{
                    Authorization:localStorage.getItem("token")
                }
            })
            .then(item=>{
                axios.patch('https://clothesnodejs-production.up.railway.app/customer/handleInformation',{
                    name:name,
                    address:address,
                    telephone:telephone,
                    email:email
                },{
                    headers:{
                        Authorization:localStorage.getItem("token")
                    }
                })
                .then(e=>{
                    setSuccess(true);
                    dispatch(refreshcart({
                        name:name,
                        address:address,
                        telephone:telephone,
                        email:email
                    }));
                    
                })
            })
            .catch(item=>{
                setFall(true);
            })
        }
    }
    const redirect=()=>{
       history.push("/");
    }
    const displayFall=()=>{
        setFall(false);
    }
    return <CartCheckoutComponent fall={fall} setFall={displayFall} redirect={redirect} success={success} dathang={dathang} tongtien={tongtien} handleAddress={handleAddress} address={address} handleTelephone={handleTelephone} telephone={telephone} handleEmail={handleEmail} email={email} handleName={handleName} name={name} user={user} cart={cart}/>
}