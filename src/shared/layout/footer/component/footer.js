import React from "react"
import './footer.css';
export default function FooterComponent(props){
    return <div className="footer">
        <div className="footer__info">
            <div className="footer__info-telephone">
                <div className="footer__info-icon"><i class="fa-solid fa-phone"></i></div>
                <div className="footer__info-telephone-text">
                    <h4>GỌI MUA HÀNG (08:30-21:30)</h4>
                    <h2 style={{color:"#b20300"}}>0966835110</h2>
                    <span style={{fontSize:"13px",color:"gray"}}> Tất cả các ngày trong tuần</span>
                </div>
            </div>
            <div className="footer__info-email">
                <h4>ĐĂNG KÝ NHẬN THÔNG TIN MỚI</h4>
                <div className="footer__info-email-box">
                    <input className="footer__info-input" placeholder="Nhập email của bạn tại đây..."></input>
                    <button className="footer__info-button">Đăng ký</button>
                </div>
            </div>
        </div>
        <br/>
        <div className="footer__lienhe">
            
            <ul className="footer__lienhe-list">
                <h3>HỘ KINH DOANH TORANO</h3>
                <li className="footer__lienhe-list-li">Mã số thuế: 01M8017618</li>
                <li className="footer__lienhe-list-li">Điện thoại: 0966835110</li>
                <li className="footer__lienhe-list-li">Email: cskh@torano.vn</li>
                <li className="footer__lienhe-list-li">Địa chỉ: số 1165 Giải Phóng, phường Thịnh Liệt, quận Hoàng Mai, Thành phố Hà Nội.</li>
            </ul>
            <ul className="footer__lienhe-list">
                <h3>HỖ TRỢ KHÁCH HÀNG</h3>
                <li className="footer__lienhe-list-li">Hướng dẫn chọn size</li>
                <li className="footer__lienhe-list-li">Chính sách khách hàng thân thiết</li>
                <li className="footer__lienhe-list-li">Chính sách đổi hàng</li>
                <li className="footer__lienhe-list-li">Chính sách bảo mật</li>
                <li className="footer__lienhe-list-li">Thanh toán, Giao nhận</li>
                <li className="footer__lienhe-list-li">Câu hỏi thường gặp</li>
            </ul>
            <ul className="footer__lienhe-list">
                <h3>
                VỀ CHÚNG TÔI
                </h3>
                <li className="footer__lienhe-list-li">Giới thiệu</li>
                <li className="footer__lienhe-list-li">Liên hệ</li>
                <li className="footer__lienhe-list-li">Tìm đại lý</li>
                <li className="footer__lienhe-list-li">Tuyển dụng</li>
            </ul>
            <ul className="footer__lienhe-list">
                <h3>LIÊN HỆ</h3>
                <li className="footer__lienhe-list-li">Facebook <i style={{color:"rgb(59 89 152)"}} class="fa-brands fa-facebook-square"></i></li>
                <li className="footer__lienhe-list-li">Twitter <i style={{color:"#2ac5f1"}} class="fa-brands fa-twitter-square"></i></li>
                <li className="footer__lienhe-list-li">Zalo <img style={{position:"relative",top:"2.5px",height:"15px",width:"16px"}} src="https://inkythuatso.com/uploads/thumbnails/800/2021/09/zalo-logo-inkythuatso-14-15-05-01.jpg"></img></li>
            </ul>
        </div>
    </div>
};