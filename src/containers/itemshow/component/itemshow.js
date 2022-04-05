import React from "react";
import AddItemContainer from "../../AddItemForm/AddItemContainer";
import ItemboxContainer from "../../itembox/itembox";
import './itemshow.css';
export default function ItemShowComponent(props){
    return <div className="itemshow">
        {
            props.items.map(item=>{
                return <ItemboxContainer item={item}/>
            })
        }
        {
             props.user.admin==1?<div className="itemShow_createItemButton" onClick={function(){
                props.setAddItem(true);
            }}>
                <i className="fa-solid fa-plus"></i>
            </div>:<></>
        }
        {
            props.addItem && props.user.admin==1?<AddItemContainer setAddItem={props.setAddItem}/>:<></>
        }
    </div>
}