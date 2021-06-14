import styles from './CartItem.module.css';

const CartItem = ({name, price, amount}) => {
  const formattedPrice = `$${price.toFixed(2)}`;

  return (
    <li className={styles.item}>
      <div>
        <h2>{name}</h2>
        <div className={styles.summary}>
          <span className={styles.price}>{formattedPrice}</span>
          <span className={styles.amount}>x {amount}</span>
        </div>
      </div>
      <div className={styles.totalPrice}>
        ${price * amount}
      </div>
    </li>
  );
};

export default CartItem;
