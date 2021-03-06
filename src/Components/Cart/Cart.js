import { useContext } from "react";
import CartContext from "../../Store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
const Cart = (props) => {
    const cartCtx=useContext(CartContext);
    //here i use tofixed for getting two decimels
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const orderButtonCondition = cartCtx.items.length > 0;
    const attention=cartCtx.items.length === 0;
 const removeItemHandler=(id)=>{
     cartCtx.removeItem(id)
 } ;
 const addItemHandler=(item)=>{
     //here i have added function so that whenever 
     //the user click on plus button items should be added
     cartCtx.addItem({...item,amount:1});
 };
  const cartItems = (
    <ul className={classes["cart-items"]}>
    
      {cartCtx.items.map((item) => (
       <CartItem
       key={item.id}
       name={item.name}
       amount={item.amount}
       price={item.price}
       onRemove={removeItemHandler.bind(null,item.id)}
       onAdd={addItemHandler.bind(null,item)}
       />
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
        
      </div>
      <div>{attention && <p>Cart is empty ,please add something from the food menu</p>}</div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>Close</button>
        
        {orderButtonCondition && <button className={classes.button}>Order</button>} 
      </div>
    </Modal>
  );
};
export default Cart;
