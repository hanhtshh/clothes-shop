import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AddItemComponent from './component/AddItemComponent'

function AddItemContainer(props) {
    const [listCategory,setListCategory]=useState();
    useEffect(()=>{
        axios.get("https://clothesnodejs-production.up.railway.app/category")
        .then(response=>response.data)
        .then(data=>{
            setListCategory(data);
        })
    },[])
    return (
        <AddItemComponent setAddItem={props.setAddItem}/>
    )
}

export default AddItemContainer
