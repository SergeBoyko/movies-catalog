import React from "react";

const ListGroup = props => {
  const {
    textProperty,
    valueProperty,
    genres,
    selectedGenre,
    selectGenre
  } = props;

  return (
    <div className="col-3">
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

ListGroup.defaultProps = {
  valueProperty: "_id",
  textProperty: "name"
};

export default ListGroup;
