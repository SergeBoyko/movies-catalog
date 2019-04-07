import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import auth from "../../../services/authService";
//import Like from "../Like/like";
import Button from "../Button/Button";
import Table from "./Table";

class MoviesTable extends Component {
  constructor() {
    super();
    const user = auth.getCurrentUser();
    if (user && user.isAdmin) this.columns.push(this.deleteColumn);
    if (user) this.columns.unshift(this.movieLinkTitle);
    if (!user) this.columns.unshift(this.movieTitle);
  }

  columns = [
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" }
    // {
    //   key: "like",
    //   content: movie => (
    //     <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />
    //   )
    // }
  ];

  movieLinkTitle = {
    path: "title",
    label: "Title",
    content: movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
  };

  movieTitle = {
    path: "title",
    label: "Title",
    content: movie => movie.title
  };

  deleteColumn = {
    key: "delete",
    content: movie => (
      <Button
        title="Delete"
        actionclass="danger"
        clicked={() => this.props.onDelete(movie)}
      />
    )
  };

  render() {
    const {
      movies,
      // onLike,
      onDelete,
      onSort,
      sortColumn,
      pageSize,
      currentPage,
      onPageChange,
      user,
      admin,
      filtred
    } = this.props;
    return (
      <Table
        columns={this.columns}
        movies={movies}
        // onLike={onLike}
        onDelete={onDelete}
        onSort={onSort}
        sortColumn={sortColumn}
        filtred={filtred}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={onPageChange}
        user={user}
        admin={admin}
      />
    );
  }
}

MoviesTable.propTypes = {
  movies: PropTypes.array.isRequired,
  onDelete: PropTypes.func,
  onSort: PropTypes.func,
  sortColumn: PropTypes.object.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func,
  user: PropTypes.object,
  admin: PropTypes.bool,
  filtred: PropTypes.array.isRequired
}

export default MoviesTable;
