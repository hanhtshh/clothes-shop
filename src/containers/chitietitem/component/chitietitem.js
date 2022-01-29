import ImageshowContainer from '../../imageshow/imageshow';
import './chitietitem.css';
export default function ChitietitemComponent(props){
    const click=(item)=>{
        props.click(item.target.src);
        props.setIndex(item.target.id);
    }
    return <>
    <div className="chitietitem__headding">
        <span className="chitietitem__link"><i class="fas fa-home"></i> Trang chủ</span>
        <span>{" "}|{" "}</span>
        <span >{props.item.name}</span>
    </div>
    <div className='chitietitem__body'>
        <div className='chitietitem__body-col'>
            <div className='chitietitem__body-col-set'>
            <div className='chitietitem__body-listimage'>
            {
                props.item.image.map((item,index)=>{
                    return index==props.index?<div className='boder'><img src={item} id={index} className='chitietitem__body-listimage-image' style={{margin:0,padding:0,border:'none'}} onClick={click}/></div> :<img src={item} id={index} className='chitietitem__body-listimage-image' onClick={click}/>
                })
            }
        </div>
        <div className='chitietitem__body-image'>
            <img src={props.item.image[props.index]} className='chitietitem__body-image-show' onClick={props.setImageshow}/>
        </div>
            </div>
        </div>
        
        <div className='chitietitem__body-info font'>
            <h4>{props.item.name}</h4>
            <p>Mã sản phẩm: <span style={{fontWeight:'bold'}}>{props.item._id.toUpperCase()}</span></p>
            <div className='chitietitem__body-info-price'>
                <span>{props.item.sale.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}₫</span>
                <span> {props.item.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}₫</span>
                <span> Giảm {100-(props.item.sale/props.item.price*100).toFixed(0)}%</span>
            </div>
        </div>
         <ImageshowContainer imageshow={props.imageshow} setImageshow={props.setImageshow} index={props.index} congIndex={props.congIndex} truIndex={props.truIndex} listImage={props.item.image}/>
    </div>
    </>
}