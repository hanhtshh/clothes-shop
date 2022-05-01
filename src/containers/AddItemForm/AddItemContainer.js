import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { SERVER } from '../../util';
import AddItemComponent from './component/AddItemComponent'
import { createItem, handleItem } from './service';

function AddItemContainer(props) {
    const item = useSelector(state => state.item);
    const [listCategory, setListCategory] = useState([]);
    const [sizeInput, setSizeInput] = useState("");
    const [numberInput, setNumberInput] = useState(0);
    const [categoryInput, setCategoryInput] = useState("SALE");
    const [listSize, setListSize] = useState([]);
    const [listImage, setListImage] = useState([]);
    const [nameInput, setNameInput] = useState("");
    const [linkImageInput, setLinkImageInput] = useState("");
    const [priceInput, setPriceInput] = useState(0);
    const [saleInput, setSaleInput] = useState(0);
    const [describesInput, setDescribesInput] = useState("");
    useEffect(() => {
        axios.get(SERVER + "/category")
            .then(response => response.data)
            .then(data => {
                setListCategory(data);
            })
    }, [])
    useEffect(() => {
        if (props.handle == "handle") {
            setCategoryInput(item.category.name);
            setListSize(item.size.map(size => { return { name: size.name, quantity: size.quantity } }));
            setListImage(item.image);
            setNameInput(item.name);
            setPriceInput(item.price);
            setSaleInput(item.sale);
            setDescribesInput(item.describes);
        }
    }, [item])
    const pushSize = () => {
        if (sizeInput != "" && numberInput != 0) {
            setListSize(listSize => [...listSize, { name: sizeInput, quantity: numberInput }]);
            setSizeInput("");
            setNumberInput(0);
        }
        else {
            alert("vui lòng nhập đủ thông tin")
        }
    }
    const pushImageLink = () => {
        if (linkImageInput) {
            setListImage(listImage => [...listImage, linkImageInput]);
            setLinkImageInput("");
        }
        else {
            alert("vui lòng nhập đủ thông tin")
        }
    }
    const deleteSize = (name) => {
        setListSize(listSize => listSize.filter(size => size.name != name));

    }
    const deleteImage = (indexImage) => {
        setListImage(listImage => listImage.filter((image, index) => index != indexImage));
    }
    const addOrHandleItem = async () => {
        if (props.handle == "handle") {
            const rp = await handleItem(item._id, nameInput, categoryInput, priceInput, saleInput, listSize, listImage, describesInput);
            if (rp) {
                alert('Sửa sản phẩm thành công');
                props.setAddItem(false);
            }
        }
        else {
            const rp = await createItem(nameInput, categoryInput, priceInput, saleInput, listSize, listImage, describesInput);
            if (rp) {
                alert('Thêm sản phẩm thành công');
                props.setItems(items=>[...items,rp]);
                props.setAddItem(false);
            }
        }
    }
    const deleteItem = () => {
        axios.delete(SERVER + '/item/' + item._id, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
            .then(() => {
                alert('Xóa sản phẩm thành công');
                props.setItems(items => items.filter(sp => sp._id != item._id));
                props.setAddItem(false);
            })
            .catch(() => {
                alert('Xóa sản phẩm thất bại');
            })
    }
    return (
        <AddItemComponent deleteItem={deleteItem} setPriceInput={setPriceInput} setSaleInput={setSaleInput} addOrHandleItem={addOrHandleItem} categoryInput={categoryInput} setCategoryInput={setCategoryInput} setDescribesInput={setDescribesInput} describesInput={describesInput} priceInput={priceInput} saleInput={saleInput} setNameInput={setNameInput} handle={props.handle} nameInput={nameInput} deleteImage={deleteImage} pushImageLink={pushImageLink} linkImageInput={linkImageInput} setLinkImageInput={setLinkImageInput} listImage={listImage} deleteSize={deleteSize} sizeInput={sizeInput} numberInput={numberInput} setSizeInput={setSizeInput} setNumberInput={setNumberInput} listSize={listSize} pushSize={pushSize} setAddItem={props.setAddItem} listCategory={listCategory} />
    )
}

export default AddItemContainer
