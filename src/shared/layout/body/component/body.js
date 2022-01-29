import React from "react";
import { BrowserRouter as Router,Route, Switch } from "react-router-dom";
import ChitietitemContainer from "../../../../containers/chitietitem/chitietitem";
import HomeContainer from "../../../../containers/home/home";
import ItemShowContainer from "../../../../containers/itemshow/itemshow";
import LoginContainer from "../../../../containers/login/login";
import './body.css';
export default function BodyComponent(props){
    return <body className="body">
            <Switch>
                <Route path='/item'>
                    <ChitietitemContainer/>
                </Route>
                <Route path='*'>
                    <HomeContainer/>
                </Route>
            </Switch>

    </body>
};