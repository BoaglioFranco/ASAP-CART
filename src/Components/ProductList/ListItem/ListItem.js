import styles from "./ListItem.module.css";

const ListItem = ({ product, dispatch, onAdd, onRemove }) => {
  //formatting price so they all look the same
  const formattedPrice = `$${product.price.toFixed(2)}`;

  return (
    <li className={styles.item}>
      <div>
        <h3>{product.name}</h3>
        <div className={styles.price}>{formattedPrice}</div>
      </div>
      <div>
        <button className={styles.buttonSuccess} onClick={onAdd}>
          +
        </button>
        <button
          className={styles.buttonDanger}
          disabled={product.quantity <= 0}
          onClick={onRemove}
        >
          -
        </button>
      </div>
    </li>
  );
};

export default ListItem;
