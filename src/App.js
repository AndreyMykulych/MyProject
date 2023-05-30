import React from "react";
import { Outlet } from "react-router-dom";
import Header from './components/mainComponent/header'
import Main from "./components/mainComponent/mainContent/main";
import Footer from "./components/mainComponent/fotterComponent/footer";
import Tesla from "./components/mainComponent/TeslaPage/teslaPage";
import Business from "./components/mainComponent/businessPage/businessPage";
import Tech from "./components/mainComponent/techPage/tech";
import Life from "./components/mainComponent/lifePage/life";
const App = () => {
   
   
    return (
        <div>
                <Header />
            <Main />
            {/* <Tesla/> */}
            {/* <Business/> */}
            {/* <Tech/> */}
            {/* <Life/> */}
                <Footer />
            
        </div>
    )
}

export default App;