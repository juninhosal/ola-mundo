import styles from './Menu.module.css';
import {NavLink} from "react-router-dom";
import FormatarMenu from "json/menu.json"
export const Menu = () => {
    return(
        <header>
            <nav className={styles.navegacao}>
                {FormatarMenu.filter(menu => menu.menu).map(menu =>(
                    <NavLink
                        key={menu.id}
                        className={
                        ({ isActive }) => `
                            ${styles.link} 
                            ${isActive ? styles.linkDestacado : ''}
                        `}
                        to={menu.url}
                        end
                    >
                        {menu.menu}
                    </NavLink>
                    ))}
            </nav>
        </header>
    )
}

