export default (state = {}, action) => {
  switch (action.type) {
    case "GET_ERROR":
      return action.payload;
    default:
      return state;
  }
};
