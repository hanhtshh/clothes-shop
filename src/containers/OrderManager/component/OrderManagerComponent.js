import React from 'react';
import styles from './styles.module.css';
function OrderManagerComponent(props) {
    return (
        <div className={styles.orderManager}>
            <div className={styles.userInfo}>
                <h2 className={styles.userInfo_name}>
                    {props.user.name}
                </h2>
                <div className={styles.infoBox}>
                    <p className={styles.infoBox_p}>
                        Email: {props.user.email}
                    </p>
                    <p className={styles.infoBox_p}>
                        Telephone: {props.user.telephone}
                    </p>
                    <p className={styles.infoBox_p}>
                        Address: {props.user.address}
                    </p>
                </div>
            </div>
            <div className={styles.orderList}>
                <h2>Đơn hàng của bạn:</h2>
                {props.orderList.map(order => {
                    return <div className={styles.orderBox}>
                        <div className={styles.orderBox_footer}>
                            <div className={styles.orderBox_body}>
                                <div className={styles.orderBox_header}>
                                    <p>ID: {order._id}</p>
                                    <p>Ngày đặt: {order.oder_date}</p>
                                    <p>Tên người nhận: {order?.customer?.name ? order.customer.name : props.user.name}</p>
                                    <p>SĐT: {order.telephone}</p>
                                    <p>Địa chỉ: {order.address}</p>
                                    {order?.paypalStatus && <p>Đã thanh toán <i class="fa-solid fa-circle-check" style={{ fontSize: "14px" }}></i></p>}
                                </div>
                                {
                                    order.oder_list.map(item => {
                                        return <div className={styles.itemBox}>
                                            <div className={styles.imageBox}>
                                                <img className={styles.image} src={item?.item?.image?.[0]} />
                                            </div>
                                            <div className={styles.itemDescribes}>
                                                <h5 className={styles.itemName}>
                                                    {
                                                        item?.item?.name
                                                    }
                                                </h5>

                                                <p className={styles.itemNumber}>
                                                    x {item.quantity}
                                                </p>
                                                <p className={styles.itemNumber}>
                                                    size: {item.size}
                                                </p>
                                                <p className={styles.itemPrice}>
                                                    Giá: {item?.item?.sale.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}₫
                                                </p>
                                            </div>
                                        </div>
                                    })
                                }
                            </div>
                            <button className={styles.orderButton} onClick={
                                function () {
                                    props.deleteOrder(order._id);
                                }
                            }>
                                hủy
                            </button>
                            {props.user.admin == 1 ? <button className={styles.orderButton2} onClick={
                                function () {
                                    props.succesOder(order._id);
                                }
                            }>
                                hoàn thành
                            </button> : <></>}
                        </div>

                    </div>
                })}
            </div>
        </div>
    )
}

export default OrderManagerComponent;
