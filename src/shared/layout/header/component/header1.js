import React from 'react';
import { Link } from 'react-router-dom';
import LoginContainer from '../../../../containers/login/login';
import SignupContainer from '../../../../containers/signup/signup';
import CartContainer from '../../../cart/cart';
import './header.css';
export default function Header1Component(props){
    return<header className='header'>
        <div className="header__info">
            <Link to="/he-thong-cua-hang" className="header__link">Hệ thống cửa hàng</Link>
            <span>{" "}|{" "}</span>
            <span className="header__link">Mua hàng: <span  style={{color:"#ff0000",fontSize:"13px",fontWeight:500}}>0966835110</span></span>
        </div>
        <div className='header__service'>
            <span className="header__link" onClick={props.setDisplayCart}>Giỏ hàng <i class="fab fa-opencart"></i></span>
            <span>{" "}|{" "}</span>
            <span className="header__link" onClick={props.setDisplayLogin}>Đăng nhập <i class="fas fa-sign-in-alt"></i></span>
            <span>{" "}|{" "}</span>
            <span className="header__link" onClick={props.setDisplaySignup}>Đăng kí {" "}<i class="far fa-address-card"></i></span>
        </div>
        {props.displayLogin && <LoginContainer setDisplayLogin={props.setDisplayLogin} setDisplaySignup={props.setDisplaySignup}/>}
        {props.displayCart && <CartContainer setDisplayCart={props.setDisplayCart}/>}
        {props.displaySignup && <SignupContainer setDisplaySignup={props.setDisplaySignup} setDisplayLogin={props.setDisplayLogin}/>} 
    </header>
};