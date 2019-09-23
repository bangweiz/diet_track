export default (state = [], action) => {
  switch (action.type) {
    case "ADD_FOOD_RESPONSE": {
      if (
        state.some(item => {
          return (
            item.food_name === action.payload.food_name &&
            item.meal_type === action.payload.meal_type
          );
        })
      ) {
        return state.map(item => {
          if (
            item.food_name === action.payload.food_name &&
            item.meal_type === action.payload.meal_type
          ) {
            return {
              ...item,
              nf_calories: item.nf_calories + action.payload.nf_calories,
              serving_qty: item.serving_qty + action.payload.serving_qty
            };
          } else {
            return item;
          }
        });
      } else {
        return [...state, action.payload];
      }
    }
    default:
      return state;
  }
};
