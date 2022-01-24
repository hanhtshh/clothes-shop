import React from 'react';
import { Link } from 'react-router-dom';
import CartContainer from '../../../cart/cart';
import './header.css';
export default function Header2Component(props){
    return<header className='header'>
        <div className="header__info">
            <Link to="/he-thong-cua-hang" className="header__link">Hệ thống cửa hàng</Link>
            <span>{" "}|{" "}</span>
            <span className="header__link">Mua hàng: <span  style={{color:"#ff0000",fontSize:"13px",fontWeight:500}}>0966835110</span></span>
        </div>
        <div className='header__service'>
            <span className="header__link" onClick={props.setDisplayCart}>Giỏ hàng <i class="fab fa-opencart"></i></span>
            <span>{" "}|{" "}</span>
            <span className="header__link" >{props.user.name}</span>
            <span>{" "}|{" "}</span>
            <span className="header__link" onClick={props.logout}>Đăng xuất <i class="fas fa-sign-out-alt"></i></span>
        </div>
        {props.displayCart && <CartContainer setDisplayCart={props.setDisplayCart}/>}
    </header>
};