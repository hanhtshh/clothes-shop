import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postitem } from "../../shared/store/actions";
import ItemboxComponent from "./component/itembox";
export default function ItemboxContainer(props){
    const [image,setImage]=useState(props.item.image[0]);
    const dispatch=useDispatch();
    const click=(item)=>{
        setImage(item.target.src);
    }
    const post=()=>{
        dispatch(postitem(props.item));
        if(props.user.admin==1){
            props.setHandle("handle");
            props.setAddItem(true);
        }
      
    }   
    return<>
        <ItemboxComponent user={props.user} image={image} click={click} item={props.item} post={post}/>
    </>
};