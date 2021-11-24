import React from "react";
import logo from '../images/squid.jpg';
import '../component/Card.css';
import { Component } from "react";
import { Link } from "react-router-dom";

function Card(item) {
    const posterURL = "https://image.tmdb.org/t/p/original";
    return (

        <div class="col-3 card" id={item.item.id} >
            <Link to={`/${item.item.id}`}>
                <div>
                    <img className="movie-image" src={posterURL + item.item.backdrop_path} />
                </div>
                <div className="card-info">
                    <p className="movie-titles">{item.item.title}</p>
                    <p className="movie-titles">{item.item.vote_average}</p>
                    <p className="movie-titles">{item.item.release_date}</p>
                </div>
            </Link>
        </div>

    )
}

export default Card




