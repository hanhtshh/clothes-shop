
import './home.css';

import { BrowserRouter as Router,Route, Switch } from "react-router-dom";
import ItemShowContainer from "../../itemshow/itemshow";
import Home1Component from './home1';
export default function HomeComponent(props){
    return<>
    
        <Home1Component categoryList={props.categoryList}/>
        <Switch>
            {
                props.categoryList.map(item=>{
                    return <Route key={item._id} path={"/home/"+item.name}>
                            <ItemShowContainer category={item.name} listItem={props.listItem}/>
                        </Route>
                })
            }
            <Route path='*'>
                <ItemShowContainer category={props.categoryList[0].name} listItem={props.listItem}/>
            </Route>
        </Switch>
        
    </> 
}