export default (state = [], action) => {
  switch (action.type) {
    case "ADD_FOOD_RESPONSE":
      return [ ...state, action.payload ];
    default:
      return state;
  }
};