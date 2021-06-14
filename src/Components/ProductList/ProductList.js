import { useContext } from "react";
import { ProductContext } from "../../Context/ProductContext";
import Card from "../Card/Card";
import ListItem from "./ListItem/ListItem";
import styles from "./ProductList.module.css";


//Renders the list you can see on the middle of the screen
const ProductList = (props) => {
  //getting the products from the context
  const productCtx = useContext(ProductContext);

  //if the context is not set for some reason, there was an error.
  if (!productCtx) {
    return <p className={styles.products}>Something went wrong...</p>;
  }

  const addItem = (id) => {
    productCtx.dispatch({ type: "ADD", id });
  };

  const removeItem = (id) => {
    productCtx.dispatch({ type: "REMOVE", id });
  };

  //maps the products objects to individual list items
  const products = productCtx.products.map((p) => {
    return (
      <ListItem
        key={p.id}
        product={p}
        onAdd={() => addItem(p.id)}
        onRemove={() => removeItem(p.id)}
      />
    );
  });

  return (
    <section className={styles.products}>
      <Card>
        <ul>{products}</ul>
      </Card>
    </section>
  );
};

export default ProductList;
