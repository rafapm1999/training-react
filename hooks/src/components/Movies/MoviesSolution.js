import './MoviesSolution.css';
import {useState} from 'react'
import movies from '../../db/movies.json'
import MoviesWrapper from './MoviesWrapper';
import MoviesMain from './MoviesMain';
import Cards from './Cards';

function MoviesSolution() {
    const [moviesList, setMoviesList]=useState(movies)
    const [fadeIn, setFadeIn]=useState(true)
    const changeVisibility = (toShow) => {
        setFadeIn(false)
        setTimeout(() => {
            setFadeIn(true)
            setMoviesList(toShow)
        }, 500)
    };

    const filterComedy = () => {
        let comedyList = movies.filter((movie) => {
            return movie.genre.includes("Comedy")
        });
        changeVisibility(comedyList)
    };

    const filterDrama= () => {
        let dramaList = movies.filter((movie) => {
            return movie.genre.includes("Drama")
        });
        changeVisibility(dramaList)
    };

    const noFilter = () => {
        changeVisibility(movies)
    };
  return (
    <MoviesMain>
         <div className="actions">
            <button onClick={noFilter}>All</button>
            <button onClick={filterComedy}>Comedy</button>
            <button onClick={filterDrama}>Drama</button>
        </div>
        <MoviesWrapper>
            {moviesList.map((movie) => (
                <Cards key={movie.id} movie={movie} fadeIn={fadeIn}/>
               ))}
        </MoviesWrapper>
    </MoviesMain>
  )
};

export default MoviesSolution;
