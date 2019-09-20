export const searchFood = title => ({
  type: 'SEARCH_FOOD_REQUEST',
  payload: title
});

export const clearFood = () => ({
  type: 'SEARCH_FOOD_RESPONSE',
  payload: { common: [], branded: [] }
});

export const addFood = item => ({
  type: 'ADD_FOOD_RESPONSE',
  payload: item
});

export const targetFood = (item, category) => ({
  type: 'TARGET_FOOD_REQUEST',
  payload: { query: item, category }
});

export const clearTargetFood = () => ({
  type: 'TARGET_FOOD_RESPONSE',
  payload: {}
});
