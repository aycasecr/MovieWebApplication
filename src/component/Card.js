import React from "react";
import logo from '../images/squid.jpg';
import '../component/Card.css';

function Card() {


    return (
        <div class="col-4 card">
            <div>
                <img className="movie-image" src={logo} />
            </div>
            <div className="card-info">
                <p className="movie-title">Squid Game</p>
                <p className="movie-detail">21.10.2021</p>
            </div>
        </div>

    );
}

export default Card