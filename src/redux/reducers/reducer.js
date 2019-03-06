import * as actionTypes from "../store/actionsTypes";

const initialState = {
  searchQuery: "",
  selectedGenre: "",
  currentPage: 1
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload.content,
        selectedGenre: null,
        currentPage: 1
      };
    case actionTypes.CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload.page
      };
    case actionTypes.SELECTED_GENRE:
      return {
        ...state,
        selectedGenre: action.payload.genre,
        currentPage: 1
      };
    default:
      return state;
  }
};

export default reducer;
