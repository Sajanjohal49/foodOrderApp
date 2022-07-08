import { Fragment } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import icon from "../../Assets/carts.png";
import CartContext from "../../Store/cart-context";
import classes from "./HeaderCartButton.module.css";
const HeaderCartButton = (props) => {
    //here we have use the usestate  to set the button animation 
  const [buttonBump, setButtonBump] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${buttonBump ? classes.bump : ""}`;
  //we have use useffect here to set animation to the button 
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setButtonBump(true);
    const timer=setTimeout(()=>{
        setButtonBump(false);
    },300)
    return ()=>{
        clearTimeout(timer);
    }
  }, [items]);
  return (
    <Fragment>
      <button className={btnClasses} onClick={props.onClickShown}>
        <span>
          <img className={classes.icon} src={icon} alt="cart" />
        </span>
        <span className={classes.text}>Your cart</span>
        <span className={classes.badge}> {numberOfCartItems}</span>
      </button>
    </Fragment>
  );
};
export default HeaderCartButton;
