import { combineReducers } from "redux";

import foodReducer from "./food";
import errorReducer from "./error";
import savedFoodReducer from "./savedFood";
import targetFoodReducer from "./targetFood";
import dietReducer from "./diet";

export default combineReducers({
  diet: dietReducer,
  target: targetFoodReducer,
  savedFood: savedFoodReducer,
  food: foodReducer,
  error: errorReducer
});