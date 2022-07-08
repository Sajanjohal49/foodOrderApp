import { Fragment } from 'react';
import styles from './Header.module.css';
import mainImage from '../../Assets/main-8.jpg'
import HeaderCartButton from './HeaderCartButton';
const Header = (props) => {
    return (<Fragment>
        <header className={styles.header}>
            <h1 className={styles.logo}>Food Order App</h1>
            <HeaderCartButton onClickShown={props.onClickShownCart}/>
        </header>
        <div className={styles['main-image']}>
            <img src={mainImage} alt="food"/>
        </div>
    </Fragment>
    );
}
export default Header;   
