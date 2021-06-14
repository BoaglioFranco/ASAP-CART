import { useContext } from "react";
import { ProductContext } from "../../Context/ProductContext";
import styles from "./Cart.module.css";
import CartItem from "./CartItem/CartItem";



//component that displays products added to cart, to be displayed in an overlay
const Cart = ({ closeHandler }) => {
  //getting products from the context
  const productCtx = useContext(ProductContext);

  let totalAmount = productCtx.products
    .reduce((currentValue, p) => p.price * p.quantity + currentValue, 0)
    .toFixed(2);

    //only displays items with at least 1 quantity
    const cartItems = productCtx.products.filter(p => p.quantity > 0);

  return (
    <>
      <ul className={styles.list}>
        {cartItems.map((p) => (
          <CartItem
            key={p.id}
            name={p.name}
            price={p.price}
            amount={p.quantity}
          ></CartItem>
        ))}
      </ul>
      <div className={styles.total}>
        <span>Total amount</span>
        <span>${totalAmount}</span>
      </div>
      <div className={styles.btnContainer}>
        <button className={styles.button} onClick={closeHandler}>
          Close
        </button>
      </div>
    </>
  );
};

export default Cart;