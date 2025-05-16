import { NavLink } from 'react-router-dom';
import Container from '../gContainer/Container';
import styles from './NavBar.module.scss';
import { faTasks } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavBar = () => {
    return (
        <nav className={styles.nav}>
            <Container>
                <div className={styles.navInner}>
                    <NavLink to="/" className={styles.icon}>
                        <FontAwesomeIcon icon={faTasks} />
                    </NavLink>
                    <ul className={styles.menu}>
                        <li><NavLink to="/" className={({ isActive }) => isActive ? styles.active : undefined}>Home</NavLink></li>
                        <li><NavLink to="/favorite" className={({ isActive }) => isActive ? styles.active : undefined}>Favorite</NavLink></li>
                        <li><NavLink to="/about" className={({ isActive }) => isActive ? styles.active : undefined}>About</NavLink></li>
                    </ul>
                </div>
            </Container>
        </nav>
    );
};

export default NavBar;
