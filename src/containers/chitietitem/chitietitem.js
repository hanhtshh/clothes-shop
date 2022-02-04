import  { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { themvaogiohang } from "../../shared/store/actions";
import ChitietitemComponent from "./component/chitietitem";

export default function ChitietitemContainer(props) {
  const item = useSelector((state) => state.item);
  const dispatch=useDispatch();
  const [huongdan, setHuongdan] = useState(false);
  const [chinhsach, setChinhsach] = useState(false);
  const [describesshow, setDescribesshow] = useState(false);
  const [number, setNumber] = useState(1);
  const [showsize, setShowsize] = useState(false);
  const [index, setIndex] = useState(0);
  const [sizeIndex, setSizeIndex] = useState(0);
  const chooseImage = (key) => {
    setIndex(key);
  };
  const [imageshow, setImageshow] = useState(false);
  const [imagecheck, setImagecheck] = useState(item.image[0]);
  const click = (src) => {
    setImagecheck(src);
  };
  const congIndex = () => {
    setIndex(index + 1);
  };
  const truIndex = () => {
    setIndex(index - 1);
  };
  const show = () => {
    setImageshow(imageshow ? false : true);
  };
  const size = () => {
    setShowsize(showsize ? false : true);
  };
  const handleSizeIndex = (item) => {
    setSizeIndex(item.target.id);
  };
  const congNumber = () => {
    if (number < item.size[sizeIndex].quantity) {
      setNumber(number + 1);
    } else {
      alert("Không đủ sản phẩm trong kho!");
    }
  };
  const truNumber = () => {
    if (number > 1) {
      setNumber(number - 1);
    }
  };
  const describesshowfunction = () => {
    setDescribesshow(describesshow ? false : true);
  };
  const chinhsachfunction = () => {
    setChinhsach(chinhsach ? false : true);
  };
  const huongdanfunction = () => {
    setHuongdan(huongdan ? false : true);
  };
  const themvaogio =()=>{
    dispatch(themvaogiohang({item,number}));
  }
  return (
    <>
      <ChitietitemComponent
        huongdan={huongdan}
        setHuongdan={huongdanfunction}
        chinhsach={chinhsach}
        setChinhsach={chinhsachfunction}
        number={number}
        describesshow={describesshow}
        setDescribesshow={describesshowfunction}
        congNumber={congNumber}
        truNumber={truNumber}
        sizeIndex={sizeIndex}
        setSizeIndex={handleSizeIndex}
        item={item}
        setShowsize={size}
        showsize={showsize}
        imagecheck={imagecheck}
        click={click}
        setImageshow={show}
        index={index}
        congIndex={congIndex}
        truIndex={truIndex}
        setIndex={chooseImage}
        imageshow={imageshow}
        themvaogio={themvaogio}
      />
    </>
  );
}
