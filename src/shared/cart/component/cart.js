import './cart.css';
export default function CartComponent(props){
    return <div className='blur'>
        <div className="cart">
        <span className='cart__close' onClick={props.setDisplayCart}><i class="far fa-times-circle"></i></span>
        <div className='cart__body'>
            <h4 className='cart__header'>
                GIỎ HÀNG
            </h4>
            <p className='cart__body-p'>Bạn đang có <b>{props.cart.length}</b> sản phẩm trong giỏ hàng.</p>
            <p className='cart__body-price'>TỔNG TIỀN TẠM TÍNH:<span className='cart__body-price-number'>{props.tongtien()}₫</span></p>
        </div>
    </div>
    </div>
};