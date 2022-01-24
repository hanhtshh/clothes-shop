import React from 'react';
import './login.css';
export default function LoginComponent(props){
    return <div style={{bottom:"0px", right:"0px"}} className='blur'>
        <div className="login__form">
        <p className='login__form-exit' onClick={props.setDisplayLogin}><i class="fas fa-times"></i></p>
        <h3 className='login__form-header'> Đăng nhập</h3>
        <br/>
        <div className='login__form-info'>Nếu đã từng mua hàng trên Website trước đây, bạn có thể dùng tính năng <span className='link' onClick={props.thongbao}>"Lấy mật khẩu"</span> để có thể truy cập vào tài khoản bằng email nhé.</div>
        <br/>
        <input className='input' placeholder='Tên đăng nhập' onChange={props.changeUsername}></input>

            <input className='input' type="password" placeholder='Mật khẩu' onChange={props.changePassword}></input>
        <button className='button' style={{color:"white",fontWeight:"500",fontSize:"14px",background:"black"}} onClick={props.login}>Đăng nhập</button>
        <br/>
        <span style={{fontWeight:"500",fontSize:"14px"}}>Hoặc</span>
        <br/>
        <button className='button' style={{color:"white",fontWeight:"500",fontSize:"14px",background:"#3b5998"}} onClick={props.thongbao}>Đăng nhập với Facebook <i class="fab fa-facebook-square"></i></button>
        <button className='button' style={{color:"black",fontWeight:"500",fontSize:"14px",background:"white",border:"0.5px solid #e3e3e3"}} onClick={props.thongbao}>Đăng nhập với Google <img src="https://storage.googleapis.com/support-kms-prod/ZAl1gIwyUsvfwxoW9ns47iJFioHXODBbIkrK" className="login__form-imagegg"/></button>
        <br/>
        <div className='link' style={{margin:"20px"}} onClick={props.chuyendoi}>Đăng ký tài khoản mới</div>
    </div>
    </div>
}