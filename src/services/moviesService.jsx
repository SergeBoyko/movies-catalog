import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/movies";
//const apiEndpoint = "/movies";

function movieUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getMovies() {
  return http.get(apiEndpoint);
}

export function getMovie(movieId) {
  return http.get(movieUrl(movieId));
}

// export function updateMovie(movie) {
//   const body = {
//     title: "Airplane 1",
//     genreId: "5c802019fe90252d10201bd8",
//     numberInStock: "2",
//     dailyRentalRate: "2",
//     liked: false
//   };
//   console.log("body movie", body);
//   return http.put(movieUrl(movie._id), body);
// }

export function saveMovie(movie) {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    return http.put(movieUrl(movie._id), body);
  }

  return http.post(apiEndpoint, movie);
}

export function deleteMovie(movieId) {
  return http.delete(movieUrl(movieId));
}
