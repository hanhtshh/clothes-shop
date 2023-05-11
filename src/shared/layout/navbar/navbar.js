import NavbarComponent from "./component/navbar";
import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { timkiem } from "../../store/actions";
import { SERVER } from "../../../util";
export default function NavbarContainer(props) {
    const [category, setCategory] = useState([]);
    const [searchKey, setSearchKey] = useState("");
    const dispatch = useDispatch();
    useEffect(() => {
        fetch(SERVER + '/category')
            .then(item => item.json())
            .then(item => {
                setCategory(item);
            });
    }, [])
    const handleSearchKey = (item) => {
        setSearchKey(item.target.value);
    }
    const search = () => {
        window.location = searchKey ? `/home?keySearch=${searchKey}` : '/home'
    }
    return <>
        <NavbarComponent category={category} handleSearchKey={handleSearchKey} search={search} />
    </>
};