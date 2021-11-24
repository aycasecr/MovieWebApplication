import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './footer/footer';
import NavbarDetail from './component/Navbar-Detail';
import './Details.css';
import Imdb from './images/imdb.webp';
import Divider from './images/divider.svg';
import axios from 'axios';
import { useParams } from "react-router-dom";

function Details(props) {
    const [movieDetail, setMovieDetail] = useState([]);
    const posterURL = "https://image.tmdb.org/t/p/original";
    const { id } = useParams();
    const apiDetail = axios.create({
        baseURL: "https://api.themoviedb.org/3/movie/" + id + "?api_key=374c33af371a54f60b20532a4a9e7791&language=en-US",
        params: {
            api_key: "374c33af371a54f60b20532a4a9e7791"
        }
    });
    let isError = false;
    useEffect(() => {
        const getMovieDetail = async () => {
            await apiDetail.get('/')
                .then(res => {
                    setMovieDetail({ movieDetail: res.data });
                    console.log(res);
                })
                .catch(err => {
                    console.log(err)
                });
        }
        getMovieDetail()
    }, []);
    let conditionalContent;

    if (isError) {
        conditionalContent = <div></div>;
    } else if (movieDetail.length != 0) {
        conditionalContent =
            <>
                <div className="maincontainer">
                    <NavbarDetail />
                    <div className="col movie-detail-container">
                        <div className="row movie-detail-row">
                            <div className="col-md-3 col-lg-3">
                                <div className="movie-div">
                                    <img className="movie-image" src={posterURL + movieDetail.movieDetail.backdrop_path} />
                                </div>

                            </div>
                            <div className="col-md-7 col-lg-7 movie-fragment">
                                <div>
                                    <p className="movie-title">{movieDetail.movieDetail.original_title}</p>
                                </div>
                                <div className="info-title flex-container">
                                    <div className="flex-container-imdb-rate">
                                        <div>
                                            <img src={Imdb} />
                                        </div>
                                        <div><p className="imdb-text">{movieDetail.movieDetail.vote_average}</p></div>
                                    </div>
                                </div>
                                <div className=" info-title flex-container">
                                    <div className="flex-container">
                                        <div><p>{movieDetail.movieDetail.release_date}</p></div>
                                        <div>
                                            <p>
                                                {
                                                    movieDetail.movieDetail.genres.map((item) => (
                                                        <span>{item.name + ", "}</span>
                                                    ))
                                                }
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 divider">
                                    <img src={Divider} />
                                </div>
                                <p className="common-text">{movieDetail.movieDetail.overview}</p>
                                {/* <div className="row info-title">
                                    <div className="col-md-1 detail-title"><p>Sezon</p></div>
                                    <div className="col-md-2 detail-explain"><p>1 (9 Bölüm)</p></div>
                                </div> */}
                                <div className=" row info-title ">
                                    <div className="col-md-1 detail-title"><p>Popülerlik</p></div>
                                    <div className="col-md-2  detail-explain"><p>{movieDetail.movieDetail.popularity}</p></div>
                                </div>
                                <div className=" row info-title ">
                                    <div className="col-md-1 detail-title"><p>Yapım Şirketleri</p></div>
                                    <div className="col-md-2  detail-explain"><p>
                                        {
                                            movieDetail.movieDetail.production_companies.map((item) =>
                                            (
                                                <span>{item.name + ","}</span>
                                            )
                                            )
                                        }
                                    </p></div>

                                </div>
                                {/* <div className=" row info-title ">
                                    <div className="col-md-1 detail-title"><p>Yapımcı</p></div>
                                    <div className="col-md-2  detail-explain"><p>Siren Pictures</p></div>
                                </div> */}
                            </div>
                        </div>
                    </div>

                    <Footer />
                </div>



            </>


    } else {
        conditionalContent = ""

    }
    return <>{conditionalContent}</>;



}

export default Details;