import React from "react";

import '../../fonts/font-raleway/raleway.css'
import './menu.css'

const Menu = () => {
    return (
        <div >
            <ul className="menu">
                <li className="menu-item">Apple News</li>
                <li className="menu-item">Tesla News</li>
                <li className="menu-item">Business News</li>
                <li className="menu-item">Tech News</li>
                <li className="menu-item">Life News</li>
                <li></li>
            </ul>
        </div>
    )
}

export default Menu;