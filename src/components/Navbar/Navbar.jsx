import { useState } from "react";
import { Button } from "../Button/Button";

import { MenuItems } from "./MenúItems";
import './navbar.css';


export const Navbar = () => {
  
    const [openMenu, setOpenMenu] = useState(false);
  
    const handleOpenMenu = () => {
        setOpenMenu(!openMenu);
    }

  return (
    <nav className="NavbarItems">

        <h1 className="navbar-logo">React
            <i className="fab fa-react"></i>
        </h1>
        <div className="menu-icon" onClick={ handleOpenMenu }>
            <i className={ openMenu ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={ openMenu ? 'nav-menu active' : 'nav-menu'} >
            {
                MenuItems.map((item, i) => {
                    return (
                        <li key={i}>
                            <a className={ item.cName } href={ item.url }>
                                { item.title }
                            </a>
                        </li>
                    )
                })
            }
        </ul>
        <Button>Sign Up</Button>

    </nav>
  )
};
