import React from "react";

<<<<<<< HEAD
import Menu from "../menu/menu";
import Logos from "./logos/logos";

import  './header.css'
 
=======
import Menu from "./menu/menu";
import Logos from "./logos/logos";

import './header.css'

>>>>>>> master

const Header = () => {
    return (
        <div className="header-background">
            
            <Logos />
            <Menu />
        </div>
    )
}

export default Header;