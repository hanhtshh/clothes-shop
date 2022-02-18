import React,{useState} from 'react';
import NavbarContainer from './shared/layout/navbar/navbar';
import HeaderContainer from './shared/layout/header/header';
import BodyContainer from './shared/layout/body/body';
import FooterContainer from './shared/layout/footer/footer';
import './shared/fontawesome-free-6.0.0-beta3-web/css/all.min.css';

function App() {
  const [displayCart,setDisplayCart]=useState(false);
  const cart=()=>{
    if(displayCart==true){
        setDisplayCart(false);
    }
    else{
        setDisplayCart(true);
    }
}
  return (
    <> 
      <HeaderContainer displayCart={displayCart} setDisplayCart={cart}/>
      <NavbarContainer/>
      <BodyContainer setDisplayCart={cart}/>
      <FooterContainer/>
    </>

  );
}

export default App;
