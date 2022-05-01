import axios from "axios";
import React, { useEffect, useState } from "react";
import { SERVER } from "../../util";
import HomeComponent from "./component/home";
export default function HomeContainer(props){
    const [categoryList,setCategoryList]=useState([0]);
    const [listItem,setListItem]=useState([]);
    useEffect(()=>{
        axios.get(SERVER+'/category')
        .then(item=>item.data)
        .then(item=>{
            setCategoryList(item);
        })
        axios.get(SERVER+'/item')
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