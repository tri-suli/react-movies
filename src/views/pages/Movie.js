import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import './Movie.style.css';

function Movie ({ request }) {
  const { title } = useParams()
  const [movie, setMovie] = useState(null);

  async function fetchMovieByTitle (t) {
    const req = await request(t);

    if (req.Response === 'True') {
      setMovie(req.Search[0]);
    }
  }

  useEffect(() => {
    fetchMovieByTitle(title)
  }, [])

  return movie && (
    <div className="MovieContainer">
      <div className="Poster">
        <img src={movie.Poster} alt={movie.Title} />
      </div>
      <div className="Description">
        <h2>{movie.Title}</h2>
        <div className="card-description">
          <p>Type: {movie.Type} | Year: {movie.Year}</p>
          <p>IMDB ID: {movie.imdbID}</p>
          <p>
            <Link to={'/'}>
              Back To Movie List
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Movie;