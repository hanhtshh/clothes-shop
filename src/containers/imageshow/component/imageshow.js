import { useState } from 'react';
import './imageshow.css';
export default function ImageshowComponent(props){
    return <div className={props.imageshow ? "imageshow show" :"imageshow"}>
        <span className='imageshow__exit' onClick={props.setImageshow}><i class="fas fa-times"></i></span>
        <img className='imageshow__image' src={props.listImage[props.index]}/>
        {props.index<props.listImage.length-1 && <i class="fas fa-chevron-right" onClick={props.congIndex}></i>}
        {props.index > 0 && <i class="fas fa-chevron-left" onClick={props.truIndex}></i>}
    </div>
}