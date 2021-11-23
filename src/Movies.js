import React from "react";
import PropTypes from "prop-types";
import './movies.css'

function Movie({year, title, summary, poster, genres}){
  return <div className="movie">
    <img className="movie_poster" src={poster} alt={title} title={title}/>
    <div className="movie_data">
      <h4 className="movie_title">{title}</h4>
      <h5 className="movie_year">{year}</h5>
      <ul className="movie_genres">
        {genres.map((genre,index) => <li key={index} className="genres_genre">{genre}</li>)}
      </ul>
      <p className="movie_summary">{summary}</p>
    </div>
  </div>
}

Movie.prototypes = {
    id : PropTypes.number.isRequired,
    year : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;