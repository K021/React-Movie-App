import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({title, poster}) {
  return (
    <div>
      <MoviePoster poster={poster}/>
      <p>{title}</p>
    </div>
  );
}

function MoviePoster({poster}) {
  return (
    <img className="poster" src={poster} alt="Movie Poster"/>
  );
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired,
};

export default Movie;