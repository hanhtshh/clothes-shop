import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import "./cartcheckout.css";
import { Link } from "react-router-dom";
export default function CartCheckoutComponent(props) {
    return <div className="cartckeckout">
        <div className="cartcheckout__info">
            <div className="cartcheckout__info-header">
                <Link to="/cart" className="cartcheckout__info-header-link">Giỏ hàng</Link><i class="fa-solid fa-angle-right"></i>
                <span className="cartcheckout__info-header-text">Thanh toán</span>
            </div>
            <p style={{ fontSize: "20px" }}>Thông tin giao hàng</p>
            <form>
                <input placeholder="Họ và tên" value={props.name != "trong" ? props.name : ""} onChange={props.handleName} className="cartcheckout__info-name">
                </input>
                <div className="cartcheckout__info-emailandphone">
                    <input placeholder="Email" value={props.email != "trong" ? props.email : ""} onChange={props.handleEmail} className="cartcheckout__info-email">
                    </input>
                    <input placeholder="Số điện thoại" onChange={props.handleTelephone} value={props.telephone != "trong" ? props.telephone : ""} className="cartcheckout__info-telephone">
                    </input>
                </div>
                <input placeholder="Địa chỉ" onChange={props.handleAddress} value={props.address != "trong" ? props.address : ""} className="cartcheckout__info-address">
                </input>
                <textarea placeholder="Ghi chú" className="cartcheckout__info-comment">

                </textarea>
            </form>
        </div>
        <div className="cartcheckout__cart">
            <div className="cartcheckout__cart-listitem">
                {
                    props.cart.map(item => {
                        return <div className="cartcheckout__cart-item">
                            <div className="cartcheckout__cart-imagebox">
                                <img className="cartcheckout__cart-image" src={item.item.image[0]}>

                                </img>
                            </div>
                            <div className="cartcheckout__cart-iteminfo">
                                {item.item.name}
                                <br />
                                Size: {item.size}
                                <br />
                                Số lượng: {item.number}
                                <br />
                                Giá: {item.item.sale.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}₫
                            </div>
                        </div>
                    })
                }
            </div>
            <div className="cartcheckout__cart-ship">
                Phí vận chuyển <p className="cartcheckout__cart-shipprice">{props.tongtien() >= 500000 ? "---" : "30.000₫"}</p>
            </div>
            <div className="cartcheckout__cart-ship">
                Tổng cộng <p className="cartcheckout__cart-shipprice"><b>{props.tongtien().toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}₫</b></p>
            </div>
            {
                props.paypalSuccess === true && <div className="cartcheckout__cart-ship">
                    Đã thanh toán    <i class="fa-solid fa-circle-check" style={{ fontSize: "15px" }}></i>
                </div>
            }
            <PayPalScriptProvider options={{ "client-id": "Ac54Kq6hRYMFO6FmD8FA2mYfemDgABSJQZSPsVImkOrEdaNnnN43BWU_zvIpa3piou3A7KYn4sOHJMro" }}>
                <PayPalButtons
                    createOrder={(data, actions) => props.createOrder(data)}
                    onApprove={(data, actions) => props.onApprove(data)}
                    className="cartchekout__cart-buttonthanhtoan paypal"

                />
            </PayPalScriptProvider>
            <div className="cartchekout__cart-buttonthanhtoan" onClick={props.dathang}>
                THANH TOÁN KHI NHẬN HÀNG
            </div>

        </div>
        {props.success ? <div className="blur">
            <div className="cartcheckout__successshow">
                <i class="fa-solid fa-circle-check"></i>
                <h3>Thành công!</h3>
                <p>Bạn đã đặt hàng thành công, vui lòng quay lại trang chủ để tiếp tục mua sắm</p>
                <p>Đơn hàng sẽ được gửi đi trong thời gian sớm nhất, xin cảm ơn!</p>
                <br />
                <button className="cartcheckout__suceesshow-button" onClick={props.redirect}>
                    Quay về trang chủ
                </button>
            </div>
        </div> : <></>}
        {props.fall ? <div className="blur">
            <div className="cartcheckout__successshow">
                <i class="fa-solid fa-circle-check"></i>
                <h3>Đặt hàng thất bại!</h3>
                <p>Vui lòng kiểm tra lại thông tin đơn hàng</p>
                <br />
                <button className="cartcheckout__suceesshow-button" onClick={props.setFall}>
                    Quay về trang chủ
                </button>
            </div>
        </div> : <></>}
    </div>
}