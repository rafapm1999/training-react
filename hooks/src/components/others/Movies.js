//import './Movies.css';
import movies from "../../db/movies.json"
import { useState } from "react";

function Movies() {

let [clicks, setCLicks] = useState(0);

const moviesList = movies;

const allMovies = moviesList.map(movie => {
    return <li>{movie.title}</li>
});

const horrorMovies = moviesList.filter((movie) => {
    return movie.genre.includes("Horror")}).map(movie => {
    return <li>{movie.title}</li>
    });

const dramaMovies = moviesList.filter((movie) => {
    return (movie.genre.includes("Drama"))}).map(movie => {
    return <li>{movie.title}</li>
    });

  return (
    <div>
    <button onClick={() => {setCLicks(clicks = 0)}}>Todas</button>
    <button onClick={() => {setCLicks(clicks = 1)}}>Horror</button>
    <button onClick={() => {setCLicks(clicks = 2)}}>Drama</button>
        <ul>
         {clicks == 0 && (allMovies)}
         {clicks == 1 && (horrorMovies)}
         {clicks == 2 && (dramaMovies)}
        </ul>
    </div>
           
  );
};

export default Movies;
