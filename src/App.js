import React from "react";
import { createBrowserRouter,RouterProvider } from "react-router-dom";


import Main from "./components/mainComponent/mainContent/main";
import Tesla from "./components/mainComponent/TeslaPage/teslaPage";
import Business from "./components/mainComponent/businessPage/businessPage";
import Tech from "./components/mainComponent/techPage/tech";
import Life from "./components/mainComponent/lifePage/life";

import Layout from "./components/layout";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index:true,
                path:'/',
                element: <Main />
            
            },
            {
                path: '/teslanews',
                element: <Tesla />,
                
            },
            {
                path: '/busnews',
                element : <Business/>,
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
        <RouterProvider router={router}> </RouterProvider>
        
    )
}

export default App;