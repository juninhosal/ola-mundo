import './Menu.css'
import {Link} from "react-router-dom";

export const Menu = () => {
    const  menu = {
        menus: 'Inicio,Sobre Mim',
        links: '/,/sobremim'
    }
    const menuItems = menu.menus.split(',')
    const menuLinks = menu.links.split(',')

    return(
        <header>
            <nav className="navegacao">
                {menuItems.map((menu, index) => (
                    <Link key={index} className="link" to={menuLinks[index]}>
                        {menu}
                     </Link>
                    ))}
            </nav>
        </header>
    )
}