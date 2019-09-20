const INITIAL_STATE = {
  common: [],
  branded: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SEARCH_FOOD_RESPONSE":
      return action.payload;
    default:
      return state;
  }
};
