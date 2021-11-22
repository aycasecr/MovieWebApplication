import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './footer/footer';
import NavbarDetail from './component/Navbar-Detail';
import './Details.css';
import DetailLogo from './images/squid-detail.webp';
class Details extends React.Component {

    render() {
        return (
            <div className="maincontainer">
                <NavbarDetail />
                <div class="col movie-detail-container">
                    <div class="row movie-detail-row">
                        <div class="col-3">
                            <img src={DetailLogo} height=" 600px;" />
                        </div>
                        <div class="col-7">
                            <p class="movie-title">Sqiud Game</p>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        )
    };
}

export default Details;