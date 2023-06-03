import React from "react";

import Menu from "../menu/menu";
import Logos from "./logos/logos";

import  './header.css'
 

const Header = () => {
    return (
        <div className="header-background">
            
            <Logos />
            <Menu />
        </div>
    )
}

export default Header;