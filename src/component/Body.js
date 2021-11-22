import React from "react";
import './Body.css';
import Card from "./Card";
import FilmIcon from "../images/film_icon.webp";

function Body() {
    return (
        <div class="col">
            <div class="row category-row" >
                <div class="col-2">
                    <img src={FilmIcon} />
                    <p className="category-title">
                        En Popüler Filmler
                    </p>

                </div>
                <div class="col-8">
                    <div class="row">
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
            </div>
            <div class="row category-row" >
                <div class="col-2">
                    <img src={FilmIcon} />
                    <p className="category-title">
                        En Çok İzlenenler
                    </p>

                </div>
                <div class="col-8">
                    <div class="row">
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
            </div>


        </div>

    );
}

export default Body