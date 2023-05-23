import React from "react";

import '../../../fonts/fonts.css'
import './menu.css'

const Menu = () => {
    return (
        <div >
            <ul className="menu">
                <li className="menu-item">NEWS</li>
                <li className="menu-item">HISTORY</li>
                <li className="menu-item">CULTURE</li>
                <li className="menu-item">TECH</li>
                <li className="menu-item">LIFE</li>
                <li className="menu-item">OPINION</li>
                <li></li>
            </ul>
        </div>
    )
}

export default Menu;