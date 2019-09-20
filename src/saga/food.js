import { put } from "redux-saga/effects";
import { takeEvery } from "redux-saga/effects";
import axios from "axios";

import { BASE_URL } from "../base/base";

function* searchFoodHandler(action) {
  try {
    const res = yield axios.get(
      `${BASE_URL}/search/instant?query=${action.payload}`
    );
    yield put({ type: "SEARCH_FOOD_RESPONSE", payload: res.data });
  } catch (error) {
    yield put({ type: "GET_ERROR", payload: error.response.data });
    yield put({
      type: "SEARCH_FOOD_RESPONSE",
      payload: { common: [], branded: [] }
    });
  }
}

function* targetFoodHandler(action) {
  try {
    let res;
    if (action.payload.category === "common") {
      res = yield axios.post(`${BASE_URL}/natural/nutrients`, {
        query: action.payload.query
      });
    } else {
      res = yield axios.get(
        `${BASE_URL}/search/item?nix_item_id=${action.payload.query}`
      );
    }
    yield put({ type: "TARGET_FOOD_RESPONSE", payload: res.data.foods[0] });
  } catch (error) {
    yield put({ type: "GET_ERROR", payload: error.response.data });
    yield put({
      type: "SEARCH_FOOD_RESPONSE",
      payload: { common: [], branded: [] }
    });
  }
}

export default function* configuration() {
  yield takeEvery("SEARCH_FOOD_REQUEST", searchFoodHandler);
  yield takeEvery("TARGET_FOOD_REQUEST", targetFoodHandler);
}
