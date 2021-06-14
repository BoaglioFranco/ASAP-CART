import styles from './Header.module.css'
import CartButton from './CartButton/CartButton';

const Header = ({onCartClicked}) => {

    return (
        <header className={styles.header}>
            <h1>TP3 - <em>Boaglio</em>, Franco</h1>
            <CartButton onClick={onCartClicked}/>
        </header>
    );
}

export default Header;