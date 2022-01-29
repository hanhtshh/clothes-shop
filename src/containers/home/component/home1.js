import React from "react";
import { Link } from "react-router-dom";
import image from '../../../../src/shared/image/Sale_P2_Web_a.jpg';
import ship from '../../../shared/image/ship.png';
import vi from '../../../shared/image/vi.png';
import diamon from '../../../shared/image/diamon.png';
import sercurity from '../../../shared/image/sercurity.png';
export default React.memo (function Home1Component(props){
    const move=()=>{
        window.scrollTo(0, 0);
    }
    return<>
        <Link to='/home/SALE'><img src={image}  className='navbar__image2'/></Link>
    <div className="home">
        
        <div className="home__iconbox">
            <div className="home__icon">
            <img src={ship} className="home__icon-image"/>
            </div>
            <div className="home__iconbox-text">
                   <h3 className="home__iconbox-text-heading">Miễn phí giao hàng</h3>
                   <span>Miễn phí ship với đơn hàng lớn hơn 500K</span> 
            </div>
        </div>
        <div className="home__iconbox">
            <div className="home__icon">
            <img src={vi} className="home__icon-image"/>
            </div>
            <div className="home__iconbox-text">
                   <h3 className="home__iconbox-text-heading">Thanh toán COD</h3>
                   <span>Kiểm tra, thanh toán khi nhận hàng COD</span> 
            </div>
        </div>
        <div className="home__iconbox">
            <div className="home__icon">
            <img src={diamon} className="home__icon-image"/>
            </div>
            <div className="home__iconbox-text">
                   <h3 className="home__iconbox-text-heading">Khách hàng VIP</h3>
                   <span>Ưu đãi dành cho khách hàng thân thiết</span> 
            </div>
        </div>
        <div className="home__iconbox">
            <div className="home__icon">
            <img src={sercurity} className="home__icon-image"/>
            </div>
            <div className="home__iconbox-text">
                   <h3 className="home__iconbox-text-heading">Hỗ trợ bảo hành</h3>
                   <span>Đổi tất cả sản phẩm có tại hệ thống Store</span> 
            </div>
        </div>
    </div>
    <h3 style={{marginLeft:"35px"}}>DANH MỤC SẢN PHẨM</h3>
    <div className="home__listcategory">
        {
            props.categoryList.map(item=>{
                return <Link key={item._id} to={"/home/"+item.name} className="home__listcategory-category" onClick={move}>
                    <img src={item.image}/>
                    <br/>
                    <h5>{item.name}</h5>
                </Link>
            })
        }
    </div>
    </>
})