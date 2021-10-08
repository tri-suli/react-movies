import PropType from 'prop-types';

import Card from '../card/Card';
import './card-list.styles.css';

export default function CardList ({ movies }) {
  return (
    <div className="card-list">
      {movies.map((movie, key) => (
        <Card key={key} movie={movie} />
      ))}
    </div>
  );
}

CardList.propTypes = {
  movies: PropType.arrayOf(
    PropType.shape({
      Title: PropType.string.isRequired,
      Year: PropType.string.isRequired,
      imdbID: PropType.string.isRequired,
      Type: PropType.string.isRequired,
      Poster: PropType.string.isRequired
    }).isRequired
  )
};
