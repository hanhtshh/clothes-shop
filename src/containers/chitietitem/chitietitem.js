import React,{ useState } from "react";
import { useSelector } from "react-redux";
import ChitietitemComponent from "./component/chitietitem";

export default function ChitietitemContainer(props){
    const item=useSelector(state=>state.item);
    const [index, setIndex]=useState(0);
    const chooseImage=(key)=>{
        setIndex(key);
    }
    const [imageshow, setImageshow]= useState(false);
    const [imagecheck,setImagecheck]=useState(item.image[0]);
    const click=(src)=>{
        setImagecheck(src);
    }
    const congIndex=()=>{
        setIndex(index+1);
    }
    const truIndex=()=>{
        setIndex(index-1);
    }
    const show=()=>{
        setImageshow(imageshow? false: true)
    }
    return <>
        <ChitietitemComponent item={item} imagecheck={imagecheck} click={click} setImageshow={show} index={index} congIndex={congIndex} truIndex={truIndex} setIndex={chooseImage} imageshow={imageshow}/>
    </>
}