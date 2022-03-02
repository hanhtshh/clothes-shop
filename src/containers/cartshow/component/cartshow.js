import { Link } from "react-router-dom";
import './cartshow.css';

export default function CartshowComponent(props){
    return <>
        <div className="cartshow__link">
        <Link to="home" className="cartshow"><i class="fa-solid fa-house-chimney"></i> Trang chủ</Link> | <span>Giỏ hàng</span>
        </div>
        <div className="cartshow__body">
            <div className="cartshow__body-heading">
                <h2>GIỎ HÀNG CỦA BẠN </h2>
                <span className="cartshow__body-heading-span">(có <b>{props.cart.length}</b> sản phẩm trong giỏ hàng)</span>
            </div>
            <div className="cartshow__body-box">
                <div className="cartshow__body-item">
                    {props.cart.length? <div >
                        {
                            props.cart.map((item,index)=>{
                                return <div className="cartshow__body-item-itemshow">
                                        <img className="cartshow__body-item-image" src={item.item.image[0]}></img>
                                        <div className="cartshow__body-item-name">
                                            {item.item.name}
                                            <br/>
                                            Size:{item.size}
                                            <br/>
                                            <button id={index} className="cartshow__body-item-delete" onClick={props.deleteitem}>
                                                xóa
                                            </button>
                                        </div>
                                        <div className="cartshow__body-item-soluong">
                                            
                                            <div className="cartshow__body-item-soluong-number">
                                                {item.number}
                                            </div>
                                            
                                        </div>
                                        <div className="cartshow__body-item-price">
                                            {(item.item.sale*item.number).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}₫
                                        </div>
                                    </div>
                            })
                        }
                    </div>:<p>Bạn không có sản phẩm nào trong giỏ hàng</p> }
                </div>
                <div className="cartshow__body-action">
                        <div className="cartshow__body-buttonbox">
                            <h4 style={{margin:"0",padding:"0"}}>TÓM TẮT ĐƠN HÀNG</h4>
                            <p>Chưa bao gồm phí vận chuyển:</p>
                            <p className="cartshow__body-p"><b>Tổng tiền:</b><span className="cartshow__body-tongtien">{props.tongtien().toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}₫</span></p>
                            <i>Bạn có thể nhập mã giảm giá ở trang thanh toán</i>
                            <Link to="cart/checkout">
                                <button className="cartshow__button-dathang">
                                    TIẾN HÀNH ĐẶT HÀNG
                                </button>
                            </Link>
                            <Link to="/">
                                <button className="cartshow__button-muathem">
                                    MUA THÊM SẢN PHẨM  
                                </button>
                            </Link>
                        </div>
                </div>
            </div>
        </div>
    </>
}