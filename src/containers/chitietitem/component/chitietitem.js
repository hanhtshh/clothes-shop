import ImageshowContainer from "../../imageshow/imageshow";
import "./chitietitem.css";
export default function ChitietitemComponent(props) {
  const click = (item) => {
    props.click(item.target.src);
    props.setIndex(item.target.id);
  };
  const themsanpham=(item)=>{
    props.themvaogio();
    props.setDisplayCart();
  }
  return (
    <>
      <div className="chitietitem__headding">
        <span className="chitietitem__link">
          <i class="fas fa-home"></i> Trang chủ
        </span>
        <span> | </span>
        <span>{props.item.name}</span>
      </div>
      <div className="chitietitem__body">
        <div className="chitietitem__body-col">
          <div className="chitietitem__body-col-set">
            <div className="chitietitem__body-listimage">
              {props.item.image.map((item, index) => {
                return (
                  <img
                    src={item}
                    id={index}
                    className={
                      index == props.index
                        ? "chitietitem__body-listimage-image choose"
                        : "chitietitem__body-listimage-image"
                    }
                    onClick={click}
                  />
                );
              })}
            </div>
            <div className="chitietitem__body-image">
              <img
                src={props.item.image[props.index]}
                className="chitietitem__body-image-show"
                onClick={props.setImageshow}
              />
            </div>
          </div>
        </div>

        <div className="chitietitem__body-info font">
          <h4>{props.item.name}</h4>
          <p>
            Mã sản phẩm:{" "}
            <span style={{ fontWeight: "bold" }}>
              {props.item._id.toUpperCase()}
            </span>
          </p>
          <div className="chitietitem__body-info-price">
            <div
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                margin: "9px 9px 9px 0px",
              }}
            >
              {props.item.sale
                .toString()
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}
              ₫
            </div>
            <div style={{ fontSize: "15px", color: "#b4b4b4", margin: "12px" }}>
              {" "}
              {props.item.price
                .toString()
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}
              ₫
            </div>
            <div
              style={{
                fontSize: "20px",
                color: "#e33339",
                margin: "9px",
                fontWeight: "bold",
              }}
            >
              {" "}
              Giảm{" "}
              {100 - ((props.item.sale / props.item.price) * 100).toFixed(0)}%
            </div>
            <div
              style={{
                position: "absolute",
                borderTop: "0.5px solid gray",
                top: "20px",
                left: "105px",
                width: "60px",
              }}
            ></div>
          </div>
          <h5>KÍCH THƯỚC</h5>
          <div
            className="chitietitem__body-info-sizetext"
            onClick={props.setShowsize}
          >
            BẠN ĐÃ BIẾT SIZE CHUẨN CỦA MÌNH CHƯA?
          </div>
          <div className="size">
            {props.item.size.map((item, index) => {
              return (
                <div
                  id={index}
                  className={
                    props.sizeIndex == index ? "sizebox choose" : "sizebox"
                  }
                  onClick={props.setSizeIndex}
                >
                  {item.name}
                </div>
              );
            })}
          </div>
          <div className="number">
            <div className="number__tru" onClick={props.truNumber}>
              -
            </div>
            <div className="number__number">{props.number}</div>
            <div className="number__cong" onClick={props.congNumber}>
              +
            </div>
          </div>
          <div className="chitietitem__body-info-buttondiv">
            <button className="chitietitem__body-info-button" onClick={themsanpham}>
              THÊM VÀO GIỎ HÀNG
            </button>
            <button className="chitietitem__body-info-button">MUA NGAY</button>
          </div>
          <div
            className={
              props.describesshow
                ? "chitietitem__describes show"
                : "chitietitem__describes"
            }
          >
            <p className="chitietitem__describes-header">
              THÔNG SỐ SẢN PHẨM
              <button
                className="chitietitem__describes-header-icon"
                onClick={props.setDescribesshow}
              >
                {props.describesshow ? "-" : "+"}
              </button>
            </p>
            {props.describesshow && (
              <div className="chitietitem__describes-body">
                {props.item.describes}
              </div>
            )}
          </div>
          <div
            className={
              props.chinhsach
                ? "chitietitem__describes show"
                : "chitietitem__describes"
            }
          >
            <p className="chitietitem__describes-header">
              CHÍNH SÁCH ĐỔI TRẢ
              <button
                className="chitietitem__describes-header-icon"
                onClick={props.setChinhsach}
              >
                {props.chinhsach ? "-" : "+"}
              </button>
            </p>
          </div>
          <div
            className={
              props.huongdan
                ? "chitietitem__describes show"
                : "chitietitem__describes"
            }
          >
            <p className="chitietitem__describes-header">
              HƯỚNG DẪN BẢO QUẢN
              <button
                className="chitietitem__describes-header-icon"
                onClick={props.setHuongdan}
              >
                {props.huongdan ? "-" : "+"}
              </button>
            </p>
          </div>
          <div className="chitietitem__gioithieu">
            <img className="chitietitem__gioithieu-image" src='https://torano.vn/tp/T0298/img/tmp/img_policy_1.png'/>
            <p className="chitietitem__gioithieu-header">
                GIAO HÀNG TOÀN QUỐC
                <br/>
                <span className="chitietitem__gioithieu-body">(Nhận hàng, kiểm tra xong thanh toán sau)</span>
            </p>
          </div>
          <div className="chitietitem__gioithieu">
            <img className="chitietitem__gioithieu-image" src='https://torano.vn/tp/T0298/img/tmp/img_policy_3.png'/>
            <p className="chitietitem__gioithieu-header">
            ĐỔI SẢN PHẨM DỄ DÀNG
                <br/>
                <span className="chitietitem__gioithieu-body">(Đổi sản phẩm trong vòng 7 ngày khi còn nguyên tem mác và mức giảm giá {'<'}50%)</span>
            </p>
          </div>
          <div className="chitietitem__gioithieu">
            <img className="chitietitem__gioithieu-image" src='https://torano.vn/tp/T0298/img/tmp/img_policy_4.png'/>
            <p className="chitietitem__gioithieu-header">
            TỔNG ĐÀI BÁN HÀNG 0966835110
                <br/>
                <span className="chitietitem__gioithieu-body">(Phí dịch vụ 1.000đ/phút)</span>
            </p>
          </div>
        </div>
        <div className={props.showsize ? "blur" : ""}>
          <div
            className={
              props.showsize
                ? "chitietitem__showsize show"
                : "chitietitem__showsize"
            }
          >
            <header className="chitietitem__showsize-header">
              HƯỚNG DẪN CHỌN SIZE
              <i class="fas fa-times" onClick={props.setShowsize}></i>
            </header>
            <img
              className="chitietitem__showsize-image"
              src="https://theme.hstatic.net/200000690725/1001046816/14/tagsize_4_img.jpg?v=58"
            />
          </div>
        </div>

        <ImageshowContainer
          imageshow={props.imageshow}
          setImageshow={props.setImageshow}
          index={props.index}
          congIndex={props.congIndex}
          truIndex={props.truIndex}
          listImage={props.item.image}
        />
      </div>
    </>
  );
}
