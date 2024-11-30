import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ItemShowComponent from "./component/itemshow";
export default function ItemShowContainer(props){   
    const [items,setItems]=useState([]);
    const [addItem,setAddItem]=useState(false);
    const [handle,setHandle]=useState("create");
    const user=useSelector(state=>state.user);
    useEffect(()=>{
        setItems(props.listItem.filter(item=>item.category.name==props.category || props.category == ""));
    },[props.category]);
    return <>
        <ItemShowComponent setHandle={setHandle} handle={handle}  addItem={addItem} setAddItem={setAddItem} setItems={setItems} user={user} items={items}/>
    </>
}