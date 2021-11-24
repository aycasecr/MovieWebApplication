import React, { useState } from "react";
import './Navbar-Detail.css';
import MovieLogo from '../images/movie_logo.svg';

import { Link } from "react-router-dom";

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

        <nav className="navbar-detail">
            <a className="nav-links movie-logo-detail" href="#">   <img src={MovieLogo} /></a>

            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} ></i>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className="nav-item">

                    <Link className="nav-links" to="/">Anasayfa</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-links" to="/">Detay</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-links" to="/about">Hakkında</Link>
                </li>
            </ul>


        </nav>

    );

}
export default NavbarDetail;