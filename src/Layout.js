import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";


const Layout = ({children}) => {
    console.log(children)
    return(
        <>
        <Header />
        <main>{children}</main>
        <Footer />
        </>
    )
}

export default Layout;