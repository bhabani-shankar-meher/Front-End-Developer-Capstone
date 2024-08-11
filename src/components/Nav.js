import React from "react";
import logo_littlelemon from "../images/logo_little-lemon.png";
const Nav = () => {
    return(
        <nav>
            <img src={logo_littlelemon} alt="Logo Little Lemon" />
            <ul>
                <li><a>Home</a></li>
                <li><a>About</a></li>
                <li><a>Menu</a></li>
                <li><a>Reservation</a></li>
                <li><a>Order Online</a></li>
                <li><a>Login</a></li>
            </ul>
        </nav>
    );
};
export default Nav;