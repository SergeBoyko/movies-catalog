import React, { Component } from "react";
import Like from "../Like/like";
import Button from "../Button/Button";
import Table from "./Table";

class MoviesTable extends Component {
  render() {
    const {
      movies,
      onLike,
      onDelete,
      onSort,
      sortColumn,
      pageSize,
      currentPage,
      onPageChange,
      filtred
    } = this.props;
    const columns = [
      {
        path: "title",
        label: "Title"
        // content: movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
      },
      { path: "genre.name", label: "Genre" },
      { path: "numberInStock", label: "Stock" },
      { path: "dailyRentalRate", label: "Rate" },
      {
        key: "like",
        content: movie => (
          <Like liked={movie.liked} onClick={() => onLike(movie)} />
        )
      },
      {
        key: "delete",
        content: movie => (
          <Button
            title="Delete"
            actionclass="danger"
            clicked={() => onDelete(movie)}
          />
        )
      }
    ];

    return (
      <Table
        columns={columns}
        movies={movies}
        onLike={onLike}
        onDelete={onDelete}
        onSort={onSort}
        sortColumn={sortColumn}
        filtred={filtred}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    );
  }
}

export default MoviesTable;
