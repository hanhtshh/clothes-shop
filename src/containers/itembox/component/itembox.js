import React from "react";
export default function ItemboxComponent(props){
    return <div className="itemshow__itembox">
    <img src={props.item.image[0]} className="itemshow__itembox-image"/>
    <p className="itemshow__itembox-name">{props.item.name}</p>
</div>
}