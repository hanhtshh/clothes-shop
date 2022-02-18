import React from "react";
import BodyComponent from "./component/body";

export default function BodyContainer(props){
    return <>
        <BodyComponent setDisplayCart={props.setDisplayCart}/>
    </>
}