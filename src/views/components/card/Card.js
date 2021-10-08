import PropType from 'prop-types';
import { Link } from 'react-router-dom';

import './card.styles.css';

export default function Card ({ movie }) {
  return (
    <Link to={`/${movie.Title}`}>
      <div className="card-container">
          <img src={movie.Poster} alt="movie-poster" />
          <h2>{movie.Title}</h2>
          <div className="card-description">
            <p>Type: {movie.Type} | Year: {movie.Year}</p>
            <p>IMDB ID: {movie.imdbID}</p>
          </div>
      </div>
    </Link>
  )
}

Card.propTypes = {
  movie: PropType.shape({
    Title: PropType.string.isRequired,
    Year: PropType.string.isRequired,
    imdbID: PropType.string.isRequired,
    Type: PropType.string.isRequired,
    Poster: PropType.string.isRequired
  })
};
