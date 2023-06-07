import React from "react"
import { Outlet } from "react-router-dom"
import Footer from "./mainComponent/fotterComponent/footer"
import Header from "./mainComponent/header"



 const Layout = () => {
    return (
      <>
            <Header />
            <Outlet/>
            <Footer />
        </>
  )
 }
export default Layout;
