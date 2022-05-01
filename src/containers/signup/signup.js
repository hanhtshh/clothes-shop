import axios from "axios";
import React, { useState } from "react";
import { SERVER } from "../../util";
import SignupComponent from "./component/signup";
export default function SignupContainer(props){
    const [user,setUser]= useState({
        name:'',
        username:'',
        password:'',
        nhaplaipassword:''
    })
    const thongbao=()=>{
        alert("Tính năng đang phát triển!");
    }
    const chuyendoi=()=>{
        props.setDisplayLogin();
        props.setDisplaySignup();
    }
    const handleUsername=(item)=>{
        setUser({...user,username:item.target.value});
    }
    const handlePassword=(item)=>{
        setUser({...user,password:item.target.value});
    }
    const handleNhaplaipassword=(item)=>{
        setUser({...user,nhaplaipassword:item.target.value});
    }
    const handleName=(item)=>{
        setUser({...user,name:item.target.value});
    }
    const signup=()=>{
        if(user.username!='' && user.password!='' && user.nhaplaipassword!='' && user.nhaplaipassword==user.password){
            axios.post(SERVER+'/customer',{
                username:user.username,
                password:user.password,
                name:user.name
            })
            .then(item=>{
                alert('Đăng ký tài khoản thành công, vui lòng đăng nhập để mua hàng');
                chuyendoi();
            })
            .catch(item=>{
                alert('Vui lòng kiểm tra lại thông tin');
            })
        }
        else{
            alert('Vui lòng kiểm tra lại thông tin');
        }
    }
    return<>
        <SignupComponent setDisplaySignup={props.setDisplaySignup} chuyendoi={chuyendoi} thongbao={thongbao} handleUsername={handleUsername} handlePassword={handlePassword} handleNhaplaipassword={handleNhaplaipassword} handleName={handleName} signup={signup}/>
    </>
}