import { combineReducers } from "redux";
import searchReducer from "./search/search.reducer";

const rootReducer = combineReducers({
  searchState: searchReducer,
});

export default rootReducer;
