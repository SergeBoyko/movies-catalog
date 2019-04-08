import { SEARCH_QUERY } from "./actionsTypes";

export const searchQ = content => ({
  type: SEARCH_QUERY,
  payload: {
    content
  }
});
