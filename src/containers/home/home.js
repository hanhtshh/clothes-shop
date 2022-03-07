import axios from "axios";
import React, { useEffect, useState } from "react";
import HomeComponent from "./component/home";
export default function HomeContainer(props){
    const [categoryList,setCategoryList]=useState([0]);
    const [listItem,setListItem]=useState([]);
    useEffect(()=>{
        axios.get('https://clothesnodejs-production.up.railway.app/category',{withCredentials:true})
        .then(item=>item.data)
        .then(item=>{
            setCategoryList(item);
        })
        axios.get('https://clothesnodejs-production.up.railway.app/item',{withCredentials:true})
        .then(item=>item.data)
        .then(item=>{
            setListItem(item);
        })
        .catch(item=>{
            alert('Lỗi thực hiện request, vui lòng thử lại');
        })
    },[])
    return <>
        {listItem.length>0 && <HomeComponent categoryList={categoryList} listItem={listItem}/>}
    </>
}