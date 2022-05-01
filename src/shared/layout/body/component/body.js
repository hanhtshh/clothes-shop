import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CartCheckoutContainer from "../../../../containers/cartcheckout/cartcheckout";
import CartshowContainer from "../../../../containers/cartshow/cartshow";
import ChitietitemContainer from "../../../../containers/chitietitem/chitietitem";
import HomeContainer from "../../../../containers/home/home";
import OrderManagerContainer from "../../../../containers/OrderManager/OrderManagerContainer";
import './body.css';
export default function BodyComponent(props) {
    return <body className="body">
        <Switch>
            <Route path='/item'>
                <ChitietitemContainer setDisplayCart={props.setDisplayCart} />
            </Route>
            <Route path='/cart/checkout'>
                <CartCheckoutContainer />
            </Route>
            <Route path='/cart'>
                <CartshowContainer />
            </Route>
            <Route path='/quan-ly-don-hang'>
                <OrderManagerContainer/>
            </Route>
            <Route path='*'>
                <HomeContainer />
            </Route>
        </Switch>

    </body>
};