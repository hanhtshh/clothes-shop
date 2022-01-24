import './cart.css';
export default function CartComponent(props){
    return <div className='blur'>
        <div className="cart">
        <span className='cart__close' onClick={props.setDisplayCart}>Đóng</span>
    </div>
    </div>
};