import React from "react";
import { Link } from "react-router-dom";

import '../../../fonts/fonts.css'
import './menu.css'

const Menu = () => {
    return (
        <div >
            <ul className="menu">
                <Link to='/' className="menu-item-link" >
                    <li className="menu-item">apple news</li>
                </Link>  
                <Link to='/teslanews' className="menu-item-link">
                    <li className="menu-item">tesla news</li>
                </Link>   
                <Link to='busnews' className="menu-item-link">
                    <li className="menu-item">business news</li>
                </Link>  
                <Link to='/technews' className="menu-item-link">
                    <li className="menu-item">tech news</li>
                </Link>  
                <Link to='/lifenews' className="menu-item-link">
                    <li className="menu-item">life news</li>
                </Link>  
                
                
            </ul>
        </div>
    )
}

export default Menu;