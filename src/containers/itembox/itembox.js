import React from "react";
import ItemboxComponent from "./component/itembox";
export default function ItemboxContainer(props){
    return<>
        <ItemboxComponent item={props.item}/>
    </>
};