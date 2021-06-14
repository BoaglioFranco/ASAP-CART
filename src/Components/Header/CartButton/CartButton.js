import { useContext, useEffect, useState } from "react";
import styles from "./CartButton.module.css";
import { ProductContext } from "../../../Context/ProductContext";

const CartButton = ({ onClick }) => {
  const [buttonAnimation, setButtonAnimation] = useState(false);
  const btnStyles = `${styles.button} ${buttonAnimation ? styles.bump : ""}`;

  const productCtx = useContext(ProductContext);

  const itemCount = productCtx.products.reduce(
    (count, p) => (p.quantity > 0 ? count + 1 : count),
    0
  );

  let totalAmount = productCtx.products.reduce(
    (currentValue, p) => p.price * p.quantity + currentValue,
    0
  );

  //this effect adds animation to the button if there are items in the cart
  //it then removes the animation class 250 ms after it is added, so that it can be applied again
  //it also clears the timer on the return statement if the effect runs before the animation class is removed
  useEffect(() => {
    if (itemCount > 0) {
      setButtonAnimation(true);
    }
    const timer = setTimeout(() => {
      setButtonAnimation(false);
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [productCtx.products]);

  return (
    <button className={btnStyles} onClick={onClick}>
      <span className={styles.icon}>
        <i className="fa fa-lg fa-shopping-cart"></i>
      </span>
      <span>Your Cart</span>
      <span className={styles.amount}>${totalAmount}</span>
      <span className={styles.items}>{itemCount}</span>
    </button>
  );
};

export default CartButton;
