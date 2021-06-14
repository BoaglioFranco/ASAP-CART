import styles from "./Modal.module.css";


//overlay background
const Backdrop = ({onClick}) => {
  return <div className={styles.backdrop} onClick={onClick}></div>;
};


//overlay card
const ModalOverlay = ({ children }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};


//Component that renders its children inside a cart that sits on top of the rest of the page
const Modal = ({ children, onBackdropClick }) => {
  return (
    <>
      <Backdrop onClick={onBackdropClick} />
      <ModalOverlay>{children}</ModalOverlay>
    </>
  );
};

export default Modal;
