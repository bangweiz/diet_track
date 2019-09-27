import targetFoodReducer from "../../reducers/targetFood";

test("Should get default value", () => {
  const state = targetFoodReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({});
});

test("Should get target value", () => {
  const payload = {
    title: "milk"
  };
  const state = targetFoodReducer(undefined, {
    type: "TARGET_FOOD_RESPONSE",
    payload
  });
  expect(state).toEqual({ ...payload });
});
