import SearchActionsType from "./search.action.types";

const INITIAL_STATE = {
  showSearch: false,
};

// reducer can be thought of a s `state updater`
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SearchActionsType.TOGGLE_SHOW_SEARCH:
      return {
        ...state,
        showSearch: !state.showSearch,
      };
    default:
      return state;
  }
};

export default userReducer;
