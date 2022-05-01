import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { SERVER } from '../../util'
import OrderManagerComponent from './component/OrderManagerComponent'

function OrderManagerContainer(props) {
    const [orderList, setOrderList] = useState([]);
    const user = useSelector(state => state.user);
    useEffect(() => {
        if (user.admin) {
            axios.get(SERVER + '/oder/all', {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            })
                .then((data) => {
                    setOrderList(data.data.data);
                    console.log(data.data.data);
                })
                .catch(() => {
                    alert('Có lỗi xảy ra, vui lòng thử lại')
                })
        }
        else {
            axios.get(SERVER + '/oder', {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            })
                .then((data) => {
                    setOrderList(data.data.data);
                })
                .catch(() => {
                    alert('Có lỗi xảy ra, vui lòng thử lại')
                })
        }
    }, [user])
    const deleteOrder=(_id)=>{
        if(user.admin==1){
            axios.delete(SERVER+'/oder/admindelete/'+_id,{
                headers:{
                    Authorization:localStorage.getItem('token')
                }
            })
            .then(()=>{
                setOrderList(orderList=>orderList.filter(order=>order._id!=_id));
            })
            .catch(()=>{
                alert('Xóa đơn hàng thất bại, vui lòng thử lại sau!');
            })
        }
        else{
            axios.delete(SERVER+'/oder/'+_id,{
                headers:{
                    Authorization:localStorage.getItem('token')
                }
            })
            .then(()=>{
                setOrderList(orderList=>orderList.filter(order=>order._id!=_id));
            })
            .catch(()=>{
                alert('Xóa đơn hàng thất bại, vui lòng thử lại sau!');
            })
        }
    }
    return (
        <OrderManagerComponent deleteOrder={deleteOrder} user={user} orderList={orderList} />
    )
}

export default OrderManagerContainer
