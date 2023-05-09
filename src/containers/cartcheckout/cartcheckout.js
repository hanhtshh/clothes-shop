import CartCheckoutComponent from "./component/cartcheckout";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useState } from "react";
import { refreshcart } from "../../shared/store/actions";
import { useHistory } from "react-router-dom";
import { SERVER } from "../../util";
export default function CartCheckoutContainer(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(state => state.user);
    const cart = useSelector(state => state.cart);
    const [success, setSuccess] = useState(false);
    const [paypalSuccess, setPaypalSuccess] = useState(false);
    const [fall, setFall] = useState(false);
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [telephone, setTelephone] = useState(user.telephone);
    const [address, setAddress] = useState(user.address);
    async function createOrder(data) {
        // Order is created on the server and the order id is returned
        try {
            const response = await fetch(`${SERVER}/create-paypal-order`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: localStorage.getItem("token")
                },
                // use the "body" param to optionally pass additional order information
                // like product skus and quantities
                body: JSON.stringify({
                    cart: [
                        {
                            sku: "YOUR_PRODUCT_STOCK_KEEPING_UNIT",
                            quantity: "YOUR_PRODUCT_QUANTITY",
                        },
                    ],
                }),
            })
                .then((response) => response.json())
                .then((order) => order.id);
            return response
        }
        catch (error) {
            console.log(error)
        }
    }
    async function onApprove(data) {
        // Order is captured on the server
        try {
            const date = new Date();
            const response = await fetch(`${SERVER}/capture-paypal-order`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",

                    Authorization: localStorage.getItem("token")

                },
                body: JSON.stringify({
                    orderID: data.orderID,
                    telephone: telephone,
                    address: address,
                    cost: tongtien(),
                    oder_date: (date.getDay() + 1) + "/" + (date.getMonth() + 1) + "/" + date.getFullYear(),
                    oder_list: cart.map(item => {
                        return {
                            item: item.item._id,
                            quantity: item.number,
                            size: item.size
                        }
                    })
                })
            })
                .then((res) => res.json())
            console.log(response);
            if (response.status === "COMPLETED") {

                axios.patch(SERVER + '/customer/handleInformation', {
                    name: name,
                    address: address,
                    telephone: telephone,
                    email: email
                }, {
                    headers: {
                        Authorization: localStorage.getItem("token")
                    }
                })
                    .then(e => {
                        setSuccess(true);
                        dispatch(refreshcart({
                            name: name,
                            address: address,
                            telephone: telephone,
                            email: email
                        }));

                    })

            }
            else {
                setFall(true);
            }
            return response
        }
        catch (error) {
            console.log(error)
        }

    }
    const handleName = (item) => {
        setName(item.target.value);
    }
    const handleEmail = (item) => {
        setEmail(item.target.value);
    }
    const handleTelephone = (item) => {
        setTelephone(item.target.value);
    }
    const handleAddress = (item) => {
        setAddress(item.target.value);
    }
    const tongtien = () => {
        let tong = 0;
        for (let i of cart) {
            tong += i.item.sale * i.number
        }
        return tong;
    }
    const dathang = () => {
        if (user.admin == -1) {
            alert("Bạn cần phải đăng nhập để thanh toán!");
        }
        else {
            const date = new Date();
            axios.post(SERVER + '/oder', {
                telephone: telephone,
                address: address,
                cost: tongtien(),
                oder_date: (date.getDay() + 1) + "/" + (date.getMonth() + 1) + "/" + date.getFullYear(),
                oder_list: cart.map(item => {
                    return {
                        item: item.item._id,
                        quantity: item.number,
                        size: item.size
                    }
                })
            }, {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            })
                .then(item => {
                    axios.patch(SERVER + '/customer/handleInformation', {
                        name: name,
                        address: address,
                        telephone: telephone,
                        email: email
                    }, {
                        headers: {
                            Authorization: localStorage.getItem("token")
                        }
                    })
                        .then(e => {
                            setSuccess(true);
                            dispatch(refreshcart({
                                name: name,
                                address: address,
                                telephone: telephone,
                                email: email
                            }));

                        })
                })
                .catch(item => {
                    setFall(true);
                })
        }
    }
    const redirect = () => {
        history.push("/");
    }
    const displayFall = () => {
        setFall(false);
    }
    return <CartCheckoutComponent paypalSuccess={paypalSuccess} createOrder={createOrder} onApprove={onApprove} fall={fall} setFall={displayFall} redirect={redirect} success={success} dathang={dathang} tongtien={tongtien} handleAddress={handleAddress} address={address} handleTelephone={handleTelephone} telephone={telephone} handleEmail={handleEmail} email={email} handleName={handleName} name={name} user={user} cart={cart} />
}