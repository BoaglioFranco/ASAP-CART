import styles from "./Card.module.css";


//ui components, simply renders its children inside a cute card :)
const Card = ({ children }) => {
  return <div className={styles.card}>{children}</div>;
};

export default Card;
