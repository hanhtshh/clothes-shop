import React from 'react'
import styles from './AddItemComponent.module.css';
function AddItemComponent(props) {
    return (
        <div className='blur' style={{alignItems:"center"}}>
            <div className={styles.addItem}>
                <i className={"fa-solid fa-xmark "+styles.icon} onClick={
                    function(){
                        props.setAddItem(false)
                    }
                }></i>
                <div className={styles.addItem_header}>
                    <h1>{props.handle=="handle"?"Sửa sản phẩm":"Thêm sản phẩm"}</h1>
                </div>
                <div className={styles.addItem_body}>
                    <div className={styles.addItem_div}>
                        <div className={styles.addItem_box} style={{width:"60%"}}>
                            <span className={styles.tenthuoctinh}>
                                Tên sản phẩm
                            </span>
                            <input className={styles.addItem_nameInput} onChange={
                                function(item){
                                    props.setNameInput(item.target.value);
                                }
                            } value={props.nameInput}/>
                        </div>
                        <div className={styles.addItem_box} style={{flex:1,marginLeft:"30px"}}>
                            <span className={styles.tenthuoctinh}>
                                Danh mục
                            </span>
                            <select className={styles.addItem_category} value={props.categoryInput} onChange={
                                function(item){
                                    props.setCategoryInput(item.target.value)
                                }
                            }>
                                {props.listCategory.map(category=>{
                                    return <option>{category.name}</option>
                                })}
                            </select>
                        </div>
                    </div>
                    <div className={styles.addItem_div}> 
                        <div className={styles.addItem_box} style={{width:"50%"}}>
                            <span className={styles.tenthuoctinh}>
                                Giá gốc sản phẩm
                            </span>
                            <input value={props.priceInput} className={styles.addItem_nameInput} onChange={
                                function(item){
                                    props.setPriceInput(item.target.value);
                                }
                            }/>
                        </div>
                        <div className={styles.addItem_box} style={{marginLeft:"30px",flex:"1"}}>
                            <span className={styles.tenthuoctinh}>
                                Giá khuyến mại
                            </span>
                            <input value={props.saleInput} className={styles.addItem_nameInput} onChange={
                                function(item){
                                    props.setSaleInput(item.target.value);
                                }
                            }/>
                        </div>
                    </div>
                    <div className={styles.addItem_div}> 
                        <div className={styles.addItem_box} style={{width:"10%"}}>
                            <span className={styles.tenthuoctinh}>
                                Size
                            </span>
                            <input className={styles.addItem_nameInput} value={props.sizeInput} onChange={
                                function(item){
                                    props.setSizeInput(item.target.value);
                                }
                            }/>
                        </div>
                        <div className={styles.addItem_box} style={{marginLeft:"30px",width:"10%"}}>
                            <span className={styles.tenthuoctinh}>
                                Số lượng
                            </span>
                            <input className={styles.addItem_nameInput} value={props.numberInput} onChange={
                                function(item){
                                    props.setNumberInput(item.target.value);
                                }
                            }/>
                        </div>
                        <div className={styles.saveButton} onClick={props.pushSize}>
                            Thêm
                        </div>
                        <div className={styles.listSize}>
                            {
                                props.listSize.map(size=>{
                                    return <div className={styles.size}>
                                            <i className={"fa-solid fa-xmark "+styles.iconSize} onClick={
                                                function(){
                                                    props.deleteSize(size.name)
                                                }
                                            }></i>
                                            <span>Size: {size.name}</span>
                                            <br/>
                                            <span>Number: {size.quantity}</span>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                    <div className={styles.addItem_div}> 
                        <div className={styles.addItem_box} style={{width:"40%"}}>
                            <span className={styles.tenthuoctinh}>
                                Link ảnh
                            </span>
                            <input value={props.linkImageInput} className={styles.addItem_nameInput} onChange={
                                function(item){
                                    props.setLinkImageInput(item.target.value)
                                }
                            }/>
                        </div>
                        <div className={styles.saveButton} onClick={props.pushImageLink}>
                            Thêm
                        </div>
                        <div className={styles.addItem_box} style={{marginLeft:"30px",flex:"1"}}>
                            <span className={styles.tenthuoctinh}>
                                Mô tả
                            </span>
                            <input value={props.describesInput} onChange={
                                function(item){
                                    props.setDescribesInput(item.target.value);
                                }
                            } className={styles.addItem_nameInput}/>
                        </div>
                        
                    </div>
                    <div className={styles.addItem_div}>
                        <div className={styles.addItem_imageList}>
                            {
                                props.listImage.map((imageLink,index)=>{
                                    return <div style={{position:"relative"}}>
                                            <i className={"fa-solid fa-xmark "+styles.iconSize} style={{right:"13px"}} onClick={
                                                function(){
                                                    props.deleteImage(index);
                                                }
                                            }></i>
                                            <img alt='Image' src={imageLink} className={styles.addItem_image}/>
                                    </div>
                                    
                                })
                            }
                        </div>
                        
                    </div>
                    <div className={styles.listButton}>
                        {props.handle=="handle"?<div className={styles.footer_saveButton} onClick={props.deleteItem}>
                            Xóa
                        </div>:<></>}
                        <div className={styles.footer_saveButton} onClick={props.addOrHandleItem}>
                            Lưu
                        </div>
                        <div className={styles.footer_saveButton} style={{background:"#e2e2e2",color:"black"}} onClick={
                            function(){
                                props.setAddItem(false)
                            }
                        }>
                            Hủy
                        </div>
                    </div>
                </div>
             
            </div>
        </div>
    )
}

export default AddItemComponent
