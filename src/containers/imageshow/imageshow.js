import ImageshowComponent from "./component/imageshow";

export default function ImageshowContainer(props){
    
    return <>
         <ImageshowComponent imageshow={props.imageshow} setImageshow={props.setImageshow} index={props.index} congIndex={props.congIndex} truIndex={props.truIndex} listImage={props.listImage}/>
    </>
}