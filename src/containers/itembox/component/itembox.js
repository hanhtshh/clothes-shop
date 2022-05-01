import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import './itembox.css';
export default function ItemboxComponent(props){
    return <div className="itemshow__itembox">
    {props.user.admin!=1?<Link to='/item'><img src={props.image} className="itemshow__itembox-image" onClick={props.post}/></Link>:<div><img src={props.image} className="itemshow__itembox-image" onClick={props.post}/></div>}
    <p className="itemshow__itembox-name">{props.item.name}</p>
    <div className="itembox__imagelist">
    {
        props.item.image.slice(0,3).map(item=>{
            return <div className="itembox__imageselect">
                <img src={item} onClick={props.click} className="itembox__imageselect-image"/>
            </div>    
        })
    }
    </div>
</div>
}