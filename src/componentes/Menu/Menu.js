import styles from './Menu.module.css';
import {NavLink} from "react-router-dom";

export const Menu = () => {
    const  menu = {
        menus: 'Inicio,Sobre Mim',
        links: '/,/sobremim'
    }
    const menuItems = menu.menus.split(',')
    const menuLinks = menu.links.split(',')

    return(
        <header>
            <nav className={styles.navegacao}>
                {menuItems.map((menu, index) => (
                    <NavLink
                        key={index}
                        className={
                        ({ isActive }) => `
                            ${styles.link} 
                            ${isActive ? styles.linkDestacado : ''}
                        `}
                        to={menuLinks[index].trim()}
                        end
                    >
                        {menu}
                    </NavLink>
                    ))}
            </nav>
        </header>
    )
}