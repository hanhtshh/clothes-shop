import LoginComponent from "./component/login";
import React,{useState} from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { kiemtrauser } from "../../shared/store/actions";
export default function LoginContainer(props){
    const dispatch=useDispatch();
    const [user,setUser]=useState({
        username:'',
        password:''
    })
    const thongbao=()=>{
        alert("Tính năng đang phát triển!");
    }
    const chuyendoi=()=>{
        props.setDisplayLogin();
        props.setDisplaySignup();
    }
    const changeUsername=(item)=>{
        setUser({...user,username:item.target.value});
    }
    const changePassword=(item)=>{
        setUser({...user,password:item.target.value});
    }
    const login=()=>{
        axios.post('https://clothesnodejs-production.up.railway.app/customer/login',user)
        .then(item=>item.data)
        .then(item=>{
            localStorage.setItem('token',item.token);
            dispatch(kiemtrauser(item.data));
            props.setDisplayLogin();
        })
    }
    return <>
        <LoginComponent setDisplayLogin={props.setDisplayLogin} thongbao={thongbao} chuyendoi={chuyendoi} changeUsername={changeUsername} changePassword={changePassword} login={login}/>
    </>
}