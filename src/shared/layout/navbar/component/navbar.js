import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
export default function NavbarComponent(props){
    return <>
    <div className="navbar">
        <div className='navbar__image-block'> 
        <img src="https://images-platform.99static.com/C7mXtSeLZgYJqL8yo68fTaknBUQ=/500x500/top/smart/99designs-contests-attachments/32/32447/attachment_32447660" className='navbar__image'></img>
        </div>
        <div className='navbar__category'>
            <ul className='navbar__category-list'>
                {/* <li className='navbar__category-list-categoryname'>SALE</li>
                <li className='navbar__category-list-categoryname'>COLLECTION</li>
                <li className='navbar__category-list-categoryname'>ÁO KHOÁC 2 LỚP</li>
                <li className='navbar__category-list-categoryname'>ĐỒ NỈ</li>
                <li className='navbar__category-list-categoryname'>ÁO KHOÁC DÀY</li>
                <li className='navbar__category-list-categoryname'>SƠ MI-QUẦN DÀI</li>
                <li className='navbar__category-list-categoryname'>ÁO LEN</li>
                <li className='navbar__category-list-categoryname'>ÁO POLO</li>
                <li className='navbar__category-list-categoryname'>SẢN PHẨM</li>
                <li className='navbar__category-list-categoryname'>PHỤ KIỆN</li> */}
                {props.category.map(item=>{
                    return <Link to={"/"+item.name} className='navbar__category-list-categoryname'>{item.name}</Link>
                })}
            </ul>
        </div>
        <div className='navbar__category-icon'>
            <i class="fas fa-bars"></i>
        </div>
        
        <div className='navbar__search'>
            <input className='navbar__search-input' placeholder='Tìm kiếm sản phẩm' onChange={props.handleSearchKey}></input>
            <button className='navbar__search-button' onClick={props.search}><i class="fas fa-search"></i></button>
        </div>
        
    </div>
    <div className='navbarmobile'>
        <button className='navbarmobile__button'>
            <i class="fas fa-home navbarmobile__icon"></i>
            <br/>
            Home
        </button>
        <button className='navbarmobile__button'>
        <i class="fas fa-bars navbarmobile__icon" navbarmobile__icon></i>
        <br/>
        Danh mục
        </button>
        <button className='navbarmobile__button'>
        <i class="fas fa-phone-volume navbarmobile__icon" navbarmobile__icon></i>
        <br/>
        Telephone
        </button>
        <button className='navbarmobile__button'>
        <i class="fas fa-store navbarmobile__icon" navbarmobile__icon></i>
        <br/>
        Store
        </button>
    </div>
    </>
}