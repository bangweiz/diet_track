export default (state = {}, action) => {
  switch (action.type) {
    case "TARGET_FOOD_RESPONSE":
      return action.payload;
    default:
      return state;
  }
};