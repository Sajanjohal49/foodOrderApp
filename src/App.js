
import { useState } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import CartContextProvider from "./Store/CartContextProvider";

function App() {
  const [cartIsShown,setCartIsShown]=useState(false);
  const openClickHandler=()=>{
    setCartIsShown(true);
  }
  const closeClickHandler = ()=>{
    setCartIsShown(false);
  }
  return (
    <CartContextProvider>
      { cartIsShown && <Cart onClose={closeClickHandler}/>}
     <Header onClickShownCart={openClickHandler}/>
     <main>
       <Meals/>
     </main>
    </CartContextProvider>
  );
}

export default App;
