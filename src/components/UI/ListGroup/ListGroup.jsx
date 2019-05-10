import React from "react";
import PropTypes from 'prop-types';


const ListGroup = props => {
  const {
    textProperty,
    valueProperty,
    genres,
    selectedGenre,
    selectGenre
  } = props;
  return (
    <div className="col-3" data-test="ListGroupComponent">
      <ul className="list-group">
        {genres.map(genre => (
          <li
            key={genre[valueProperty] || genre[textProperty]}
            className={
              selectedGenre === genre ||
                (!selectedGenre && genre.name === "All Genres")
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => selectGenre(genre)}
          >
            {genre[textProperty]}
          </li>
        ))}
      </ul>
    </div>
  );
};


ListGroup.propTypes = {
  textProperty: PropTypes.string,
  valueProperty: PropTypes.string,
  genres: PropTypes.array,
  selectedGenre: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  selectGenre: PropTypes.func
}

ListGroup.defaultProps = {
  valueProperty: "_id",
  textProperty: "name"
};

export default ListGroup;
