import React, { useState } from "react";
import './Navbar.css';
import { FaHeart, FaRegHeart } from "react-icons/fa";
import MovieLogo from '../images/movie_logo.svg';
import { Link } from "react-router-dom";

function Navbar() {

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
            <a className="nav-links movie-logo" href="#"><img src={MovieLogo} /></a>
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} ></i>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className="nav-item">
                    <Link className="nav-links" to="/">Anasayfa</Link>
                </li>
                <li className="nav-item">
                    <a className="nav-links" href="#" onClick={closeMobileMenu}>Detay</a>
                </li>
                <li className="nav-item">
                    <Link className="nav-links" to="/about">Hakkında</Link>
                </li>
            </ul>
            <div className="col-5 text-div">
                <p className="nav-text-first">
                    Moduna Göre En Uygun Filmleri Seç ve İzle
                </p>
                <p className="nav-text-second">
                    Film aramaktan sıkıldın mı? Sana en uygun filmleri öneriyoruz.
                </p>
            </div>
        </nav>
    );

}
export default Navbar;