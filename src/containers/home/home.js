import axios from "axios";
import React, { useEffect, useState } from "react";
import HomeComponent from "./component/home";
export default function HomeContainer(props){
    const [categoryList,setCategoryList]=useState([]);
    const [listItem,setListItem]=useState([]);
    useEffect(()=>{
        axios.get('/category')
        .then(item=>item.data)
        .then(item=>{
            setCategoryList(item);
        })
        axios.get('/item')
        .then(item=>item.data)
        .then(item=>{
            setListItem(item);
        })
        .catch(item=>{
            alert('Lỗi thực hiện request, vui lòng thử lại');
        })
    },[])
    return <>
        <HomeComponent categoryList={categoryList} listItem={listItem}/>
    </>
}