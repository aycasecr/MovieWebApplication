import { useState, useEffect } from "react";
import './Body.css';
import Card from "./Card";
import FilmIcon from "../images/film_icon.webp";
import axios from 'axios';
import { TMDB_API_KEY } from "../apis/tmdbs/key";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie/popular?api_key=" + TMDB_API_KEY + "&language=en-US&page=1",

});

const api2 = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie/top_rated?api_key=" + TMDB_API_KEY + "&language=en-US&page=1",
});
function Body() {
    let isError = false;
    const [movies, setMovies] = useState([]);
    const [mostViewedMovies, setMostViewedMovies] = useState([]);
    const posterURL = "https://image.tmdb.org/t/p/original";
    console.log("APIKEY" + TMDB_API_KEY);

    useEffect(() => {
        const getPopular = async () => {
            await api.get('/')
                .then(res => {
                    setMovies({ movies: res });
                    console.log(movies);
                })
                .catch(err => {
                    console.log(err)
                });
        }
        getPopular()
    }, []);
    useEffect(() => {
        const getMostViewed = async () => {
            await api2.get('/')
                .then(res => {
                    setMostViewedMovies({ mostViewedMovies: res });
                    console.log(mostViewedMovies);
                })
                .catch(err => {
                    console.log(err)
                });
        }
        getMostViewed()
    }, []);

    let conditionalContent;

    if (isError) {
        conditionalContent = <div>Error Occurred</div>;
    } else if (movies !== null && movies !== undefined) {
        conditionalContent = (
            <>
                <div className="col">
                    <div className="row category-row" >
                        <div className="col-lg-2 category-content-text" >
                            <img src={FilmIcon} />
                            <p className="category-title">
                                En Popüler Filmler
                            </p>
                        </div>
                        <div className="col-lg-10">
                            <div className="row">
                                {
                                    movies.length != 0 ? movies.movies.data.results.map((movie, indeks) => (
                                        <Card item={movie} key={movie.id} />
                                    )) : <p></p>}

                            </div>
                        </div>
                    </div>
                    <div className="row category-row" >
                        <div className="col-lg-2 category-content-text">
                            <img src={FilmIcon} />
                            <p className="category-title">
                                En Çok İzlenenler
                            </p>

                        </div>
                        <div className="col-lg-10">
                            <div className="row">
                                {
                                    mostViewedMovies.length != 0 ?
                                        mostViewedMovies.mostViewedMovies.data.results.map((movie, indeks) => (
                                            <Card item={movie} key={movie.id} />
                                        )) : <p></p>}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    } else {
        conditionalContent = ""
    }
    return <>{conditionalContent}</>;
};

export default Body