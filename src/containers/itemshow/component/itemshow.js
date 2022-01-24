import React from "react";
import ItemboxContainer from "../../itembox/itembox";
import './itemshow.css';
export default function ItemShowComponent(props){
    return <div className="itemshow">
        {
            props.items.map(item=>{
                return <ItemboxContainer item={item}/>
            })
        }
    </div>
}