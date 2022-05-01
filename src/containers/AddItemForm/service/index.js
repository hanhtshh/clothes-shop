import axios from "axios";
import { SERVER } from "../../../util";

export async function createItem(name,category,price,sale,size,image,describes){
    try{
        const response=await axios.post(SERVER+'/item',{
            name:name,
            image:image,
            category:category,
            price:price,
            sale:sale,
            size:size,
            describes:describes
        },{
            headers:{
                Authorization:localStorage.getItem('token')
            }
        })
        return response.data;
    }
    catch(err){
        alert('Thêm sản phẩm thất bại, vui lòng kiểm tra lại');
        return null;
    }
}
export async function handleItem(_id,name,category,price,sale,size,image,describes){
    try{
        const response=await axios.put(SERVER+'/item/'+_id,{
            name:name,
            image:image,
            category:category,
            price:price,
            sale:sale,
            size:size,
            describes:describes
        },{
            headers:{
                Authorization:localStorage.getItem('token')
            }
        })
        return response.data;
    }
    catch(err){
        alert('Thêm sản phẩm thất bại, vui lòng kiểm tra lại');
        return null;
    }
}