import React, { useEffect, useState } from "react";
import ItemShowComponent from "./component/itemshow";
export default function ItemShowContainer(props){   
    const [items,setItems]=useState([]);
    useEffect(()=>{
        setItems(props.listItem.filter(item=>item.category.name==props.category));
    },[props.category]);
    return <>
        <ItemShowComponent items={items}/>
    </>
}