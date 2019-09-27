import * as actions from "../../actions/index";

test("Should send search request", () => {
  const action = actions.searchFood("milk");
  expect(action).toEqual({
    type: "SEARCH_FOOD_REQUEST",
    payload: "milk"
  });
});

test("Should clear food", () => {
  const action = actions.clearFood();
  expect(action).toEqual({
    type: "SEARCH_FOOD_RESPONSE",
    payload: { common: [], branded: [] }
  });
});

test("Should clear target food", () => {
  const action = actions.clearTargetFood();
  expect(action).toEqual({
    type: "TARGET_FOOD_RESPONSE",
    payload: {}
  });
});

test("Should add food", () => {
  const action = actions.addFood("milk");
  expect(action).toEqual({
    type: "ADD_FOOD_RESPONSE",
    payload: "milk"
  });
});

test("Should target fodd", () => {
  const action = actions.targetFood("milk", "common");
  expect(action).toEqual({
    type: "TARGET_FOOD_REQUEST",
    payload: { query: "milk", category: "common" }
  });
});
