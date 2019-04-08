import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import Pagination from "../Pagination/Pagination";

const Table = ({
  movies,
  // onLike,
  onDelete,
  onSort,
  sortColumn,
  columns,
  pageSize,
  currentPage,
  filtred,
  user,
  admin,
  onPageChange
}) => {
  return (
    <React.Fragment>
      {admin && (
        <div>
          <Link to="/movies/new" className="btn btn-primary">
            New Movie
          </Link>
        </div>
      )}
      <h3 style={{ marginTop: 15, marginBottom: 15 }}>
        {filtred.length} in Data Base
      </h3>
      <table className="table table-striped">
        <TableHead onSort={onSort} sortColumn={sortColumn} columns={columns} />
        <TableBody
          movies={movies}
          onDelete={onDelete}
          // onLike={onLike}
          columns={columns}
        />
      </table>
      <Pagination
        pageSize={pageSize}
        currentPage={currentPage}
        moviesCount={filtred.length}
        onPageChange={onPageChange}
        movies={movies}
      />
    </React.Fragment>
  );
};

Table.propTypes = {
  onDelete: PropTypes.func,
  onSort: PropTypes.func,
  sortColumn: PropTypes.object,
  columns: PropTypes.array,
  pageSize: PropTypes.number,
  currentPage: PropTypes.number,
  filtred: PropTypes.array,
  user: PropTypes.object,
  admin: PropTypes.bool,
  onPageChange: PropTypes.func,
}


export default Table;
