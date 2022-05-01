import React from "react";
import AddItemContainer from "../../AddItemForm/AddItemContainer";
import ItemboxContainer from "../../itembox/itembox";
import './itemshow.css';
export default function ItemShowComponent(props){
    return <div className="itemshow">
        {/* <i className={"fa-solid fa-heart iconheart"}></i> */}
        {
            props.items.map(item=>{
                return <ItemboxContainer setHandle={props.setHandle} setAddItem={props.setAddItem} user={props.user} item={item}/>
            })
        }
        {
             props.user.admin==1?<div className="itemShow_createItemButton" >
                 <div className="itemShow_childElement" onClick={function(){
                props.setAddItem(true);
                props.setHandle("create")
                 }}>
                     <i className="fa-solid fa-plus"></i>
                 </div>
               
            </div>:<></>
        }
        {
            props.addItem && props.user.admin==1?<AddItemContainer setItems={props.setItems} handle={props.handle} setAddItem={props.setAddItem}/>:<></>
        }
    </div>
}