import foodReducer from "../../reducers/food";

test("Should set up default food values", () => {
  const state = foodReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    common: [],
    branded: []
  });
});

test("Should get food response", () => {
  const payload = {
    common: ["milk"],
    branded: ["cheese"]
  };
  const state = foodReducer(undefined, {
    type: "SEARCH_FOOD_RESPONSE",
    payload
  });
  expect(state).toEqual({
    ...payload
  });
});
