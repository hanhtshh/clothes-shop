import axios from "axios";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { SERVER } from "../../../util";
import { kiemtrauser } from "../../store/actions";
import Header1Component from "./component/header1";
import Header2Component from "./component/header2";
import Header3Component from "./component/header3";

export default function HeaderContainer(props){
    const dispatch=useDispatch();
    const [displayLogin,setDisplayLogin]=useState(false);
    const [displaySignup,setDisplaySignup]=useState(false);
    const user=useSelector(state=>state.user);
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
        axios.get(SERVER+'/customer/logout')
        .then(item=>{
            localStorage.removeItem('token');
            alert('Đăng xuất tài khoản thành công');
            dispatch(kiemtrauser({
                name:"",
                email:"",
                telephone:"",
                admin:-1,
                address:""
            }))
            window.location="/";
        })
        .catch(item=>{
            alert('Có lỗi');
        })
       
    }
    if(user.admin==-1){
        return <>
        <Header1Component displayCart={props.displayCart} setDisplayCart={props.setDisplayCart} displayLogin={displayLogin} setDisplayLogin={login} displaySignup={displaySignup} setDisplaySignup={signup}/>
    </>
    }
    else if(user.admin==0){
        return <>
       <Header2Component displayCart={props.displayCart} setDisplayCart={props.setDisplayCart} user={user} logout={logout}/>
        </>
    }
    else{
        return<>
            <Header3Component displayCart={props.displayCart} setDisplayCart={props.setDisplayCart} user={user} logout={logout}/>
        </>
    }
}