import React from 'react';
import Navbar from "./UI/Navbar/Navbar";

function Header(props) {
    return (
        <header>
            <div className="container">
                <a className="logo">logo</a>
                <Navbar></Navbar>
            </div>
        </header>
    );
}

export default Header;