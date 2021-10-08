import PropType from 'prop-types';

import './search-box.styles.css';

export default function SearchBox ({ hint, handleChange }) {
  return (
    <input
      className="search"
      type="search"
      placeholder={hint}
      onChange={handleChange}
    />
  )
}

SearchBox.propTypes = {
  hint: PropType.string.isRequired,
  handleChange: PropType.func.isRequired,
}
