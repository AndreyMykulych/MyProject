import React from "react";
import { Outlet } from "react-router-dom";
import Header from './components/mainComponent/header'
import Main from "./components/mainComponent/mainContent/main";
import Footer from "./components/mainComponent/fotterComponent/footer";
import Tesla from "./components/mainComponent/TeslaPage/teslaPage";
import Business from "./components/mainComponent/businessPage/businessPage";
import Tech from "./components/mainComponent/techPage/tech";
import Life from "./components/mainComponent/lifePage/life";
import { useDispatch, useSelector } from "react-redux";
import { increment,decrement } from "./redux-toolkit/slices/firstSlice";
const App = () => {
   const count=useSelector((state)=>state.countReducer.value)
    const dispatch = useDispatch();
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
        
        // <div>
        
        //   <button
        //     aria-label="Increment value"
        //     onClick={() => dispatch(increment())}
        //   >
        //     Increment
        //   </button>
        //   <span>{count}</span>
        //   <button
        //     aria-label="Decrement value"
        //     onClick={() => dispatch(decrement())}
        //   >
        //     Decrement
        //   </button>
        // </div>
      
    )
}

export default App;