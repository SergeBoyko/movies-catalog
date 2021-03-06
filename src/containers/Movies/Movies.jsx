import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { toast } from "react-toastify";
import PropTypes from 'prop-types';
import { getMovies, deleteMovie } from "../../services/moviesService";
import MoviesTable from "../../components/UI/Table/MoviesTable";
import { paginate } from "../../components/utiles/paginate";
import ListGroup from "../../components/UI/ListGroup/ListGroup";
import { getGenres } from "../../services/genreService";
import { CURRENT_PAGE, SELECTED_GENRE } from "../../redux/store/actionsTypes";
import Spinner from './../../components/Spinner/Spinner';

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    filtred: "",
    loading: true,
    sortColumn: { path: "title", order: "asc" }
  };

  async componentDidMount() {
    const { data } = await getGenres();
    const { data: movies } = await getMovies();
    const genres = [{ name: "All Genres" }, ...data];
    this.setState({ movies, genres, loading: false });
  }

  handleDelete = async movie => {
    const originalMovies = this.state.movies;
    const movies = originalMovies.filter(m => m._id !== movie._id);
    this.setState({ movies });

    try {
      await deleteMovie(movie._id);
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        console.log("This movie has already been deleted.");
      toast.error("This movie has already been deleted.");

      this.setState({ movies: originalMovies });
    }
  };

  // handleLike = async movie => {
  //   const originalMovies = this.state.movies;
  //   const movies = [...this.state.movies];
  //   const index = movies.indexOf(movie);
  //   movies[index].liked = !movies[index].liked;
  //   this.setState({ movies });

  //   try {
  //     await updateMovie(movie);
  //   } catch (ex) {
  //     this.setState({ movies: originalMovies });
  //     toast.error('The status "Like" didn\'t change');
  //   }
  // };

  handleSort = path => {
    const sortColumn = { ...this.state.sortColumn };
    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.setState({ sortColumn });
  };

  render() {
    const { pageSize, movies: AllMovies, genres, sortColumn, loading } = this.state;

    let filtred = AllMovies;
    if (this.props.squery)
      filtred = AllMovies.filter(m =>
        m.title.toLowerCase().startsWith(this.props.squery.toLowerCase())
      );
    else if (this.props.selectedGenreRedux && this.props.selectedGenreRedux._id)
      filtred = AllMovies.filter(
        m => m.genre._id === this.props.selectedGenreRedux._id
      );

    const sorted = _.orderBy(filtred, [sortColumn.path], [sortColumn.order]);
    const movies = paginate(sorted, this.props.currentPageRedux, pageSize);
    if (loading) return <Spinner />
    return (
      <div className="row">
        <ListGroup
          genres={genres}
          selectedGenre={this.props.selectedGenreRedux}
          selectGenre={this.props.sentselectedGenre}
        />
        <div className="col-9">
          <MoviesTable
            movies={movies}
            onDelete={this.handleDelete}
            // onLike={this.handleLike}
            onSort={this.handleSort}
            sortColumn={sortColumn}
            filtred={filtred}
            onPageChange={this.props.sentCurrentPage}
            pageSize={pageSize}
            currentPage={this.props.currentPageRedux}
            user={this.props.user}
            admin={this.props.admin}
          />
        </div>
      </div>
    );
  }
}

Movies.propTypes = {
  movies: PropTypes.array,
  onDelete: PropTypes.func,
  onSort: PropTypes.func,
  sortColumn: PropTypes.object,
  pageSize: PropTypes.number,
  currentPage: PropTypes.number,
  onPageChange: PropTypes.func,
  user: PropTypes.object,
  admin: PropTypes.bool,
  filtred: PropTypes.array
}

/////////// Redux here ///////////
const mapStateToProps = state => {
  const { searchQuery, currentPage, selectedGenre } = state;
  return {
    squery: searchQuery,
    selectedGenreRedux: selectedGenre,
    currentPageRedux: currentPage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    sentCurrentPage: page =>
      dispatch({ type: CURRENT_PAGE, payload: { page } }),
    sentselectedGenre: genre =>
      dispatch({ type: SELECTED_GENRE, payload: { genre } })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movies);
