import axios from "axios";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { kiemtrauser } from "../../store/actions";
import Header1Component from "./component/header1";
import Header2Component from "./component/header2";
import Header3Component from "./component/header3";

export default function HeaderContainer(props){
    const dispatch=useDispatch();
    const [displayCart,setDisplayCart]=useState(false);
    const [displayLogin,setDisplayLogin]=useState(false);
    const [displaySignup,setDisplaySignup]=useState(false);
    const user=useSelector(state=>state.user);
    const cart=()=>{
        if(displayCart==true){
            setDisplayCart(false);
        }
        else{
            setDisplayCart(true);
        }
    }
    const login=()=>{
        if(displayLogin==true){
            setDisplayLogin(false);
        }
        else{
            setDisplayLogin(true);
        }
        }
    const signup=()=>{
        if(displaySignup==true){
            setDisplaySignup(false);
        }
        else{
            setDisplaySignup(true);
        }
    }
    const logout=()=>{
        axios.get('/customer/logout')
        .then(item=>{
            alert('Đăng xuất tài khoản thành công');
            dispatch(kiemtrauser({
                name:"",
                email:"",
                telephone:"",
                admin:-1,
                address:""
            }))
           
        })
        .catch(item=>{
            alert('Có lỗi');
        })
    }
    if(user.admin==-1){
        return <>
        <Header1Component displayCart={displayCart} setDisplayCart={cart} displayLogin={displayLogin} setDisplayLogin={login} displaySignup={displaySignup} setDisplaySignup={signup}/>
    </>
    }
    else if(user.admin==0){
        return <>
       <Header2Component displayCart={displayCart} setDisplayCart={cart} user={user} logout={logout}/>
        </>
    }
    else{
        return<>
            <Header3Component displayCart={displayCart} setDisplayCart={cart} user={user} logout={logout}/>
        </>
    }
}