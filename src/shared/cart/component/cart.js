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
            {
                props.cart.map((item,index)=>{
                    return <div className='cart__item'>
                        <img className='cart__item-image' src={item.item.image[0]}></img>
                        <p className='cart__item-describes'>
                            <div className='cart__item-name'>{item.item.name}</div>
                            <br/>
                            <span className='cart__item-price'>{item.item.sale.toString()
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}₫ x{item.number}</span>
                            <br/>
                            <span>size:{item.size}</span>
                            <br/>
                            <button className='cart__item-button' id={index} onClick={props.xoasanpham}>Xóa</button>
                        </p>
                    </div>
                })
            }
            <p className='cart__body-price'>TỔNG TIỀN TẠM TÍNH:<span className='cart__body-price-number'>{props.tongtien().toString()
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}₫</span></p>
                <button className='cart__button-thanhtoan' >
                TIẾN HÀNH ĐẶT HÀNG
            </button>
        </div>
        
    </div>
    </div>
};