import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from './components/mainComponent/header'
import Main from "./components/mainComponent/mainContent/main";
import Footer from "./components/mainComponent/fotterComponent/footer";
import Tesla from "./components/mainComponent/TeslaPage/teslaPage";
import Business from "./components/mainComponent/businessPage/businessPage";
import Tech from "./components/mainComponent/techPage/tech";
import Life from "./components/mainComponent/lifePage/life";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./redux-toolkit/slices/firstSlice";
import Layout from "./components/layout";
import { GetNewsTesla } from "./components/api/api";
asd
const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index:true,
               
                element: <Main />
            
            },
            {
                path: '/teslanews',
                element: <Tesla />,
                loader : GetNewsTesla
            },
            {
                path: '/busnews',
                element : <Business/>
            },
            {
                path: '/technews',
                element : <Tech/>
            },
            {
                path: '/lifenews',
                element : <Life/>
            },
        ]
    },
   
])

const App = () => {
        
    return (
        <RouterProvider router={router}>
        
            {/* <Header />
            <Main /> */}
            {/* <Tesla/> */}
            {/* <Business/> */}
            {/* <Tech/> */}
            {/* <Life/> */}
                {/* <Footer /> */}
        </RouterProvider>
        
    )
}

export default App;