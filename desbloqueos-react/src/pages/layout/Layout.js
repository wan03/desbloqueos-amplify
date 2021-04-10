import React from "react";
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'

const Layout = ({children}) => (
    <div className="d-flex flex-column min-vh-100">
    <Navbar />
    <main className="flex-shrink-0">{children}</main>
    <Footer />
    </div>
);

export default Layout;
