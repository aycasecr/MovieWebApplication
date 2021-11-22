import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './component/Navbar';
import Footer from './footer/footer';
import NavbarDetail from './component/Navbar-Detail';
import './About.css';


class About extends React.Component {

    render() {
        return (
            <div className="maincontainer">
                <NavbarDetail />
                <div class="about-div">
                    <p className="about-text">About</p>
                </div>
                <Footer />
            </div>
        )
    };
}

export default About;