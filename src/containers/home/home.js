import axios from "axios";
import React, { useEffect, useState } from "react";
import { SERVER } from "../../util";
import HomeComponent from "./component/home";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";
export default function HomeContainer(props) {
    const [categoryList, setCategoryList] = useState([0]);
    const [listItem, setListItem] = useState([]);
    const { search } = useLocation();
    const keySearch = decodeURI(search.split('=')?.[1] || '')
    const user = useSelector(state => state.user);

    useEffect(() => {
        axios.get(SERVER + '/category')
            .then(item => item.data)
            .then(item => {
                setCategoryList(item);
            })
    }, [])

    useEffect(() => {
        axios.get(SERVER + '/item', {
            params: {
                keySearch,
                userEmail: user?.email
            }
        })
            .then(item => item.data)
            .then(item => {
                setListItem(item);
            })
            .catch(item => {
                alert('Lỗi thực hiện request, vui lòng thử lại');
            })
    }, [keySearch])
    return <>
        {listItem.length > 0 && <HomeComponent categoryList={categoryList} listItem={listItem} />}
    </>
}