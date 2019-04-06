import React from "react";
import PropTypes from "prop-types";

const Pagination = props => {
  const { pageSize, currentPage, moviesCount, onPageChange } = props;

  const pageCount = Math.ceil(moviesCount / pageSize);
  let mypages = Array.from(Array(pageCount), (x, index) => index + 1);
  if (pageCount === 0) return <p data-test='NoMovies'>No Movies in Stock</p>;
  if (pageCount === 1) return null;

  return (
    <nav data-test='PaginationComponent'>
      <ul className="pagination">
        {mypages.map(page => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <button data-test='ButtonNumberPage' className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  moviesCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};
export default Pagination;
