import { useState } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Header/Header";
import Modal from "./Components/Modal/Modal";
import ProductList from "./Components/ProductList/ProductList";
import { ProductProvider } from "./Context/ProductContext";

function App() {

  //state used to toggle display of the cart overlay, its passed down through props to every component that needs it
  const [showOverlay, setShowOverlay] = useState(false);

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };

  return (
    <ProductProvider>
      {showOverlay && (
        <Modal onBackdropClick={toggleOverlay}>
          <Cart closeHandler={toggleOverlay}  />
        </Modal>
      )}
      <Header onCartClicked={toggleOverlay} />
      <ProductList />
    </ProductProvider>
  );
}

export default App;
