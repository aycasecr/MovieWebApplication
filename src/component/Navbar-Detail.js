import React, { useState } from "react";
import './Navbar-Detail.css';
import MovieLogo from '../images/movie_logo.svg';



function NavbarDetail() {

    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);



    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        }
    }


    return (

        <nav className="navbar">
            <a class="nav-links movie-logo" href="#">   <img src={MovieLogo} /></a>

            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} ></i>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className="nav-item">
                    <a class="nav-links" href="#" onClick={closeMobileMenu}>Home</a>
                </li>
                <li className="nav-item">
                    <a class="nav-links" href="#" onClick={closeMobileMenu}>Detail</a>
                </li>
                <li className="nav-item">
                    <a class="nav-links" href="#" onClick={closeMobileMenu}>About</a>
                </li>
            </ul>


        </nav>

    );

}
export default NavbarDetail;