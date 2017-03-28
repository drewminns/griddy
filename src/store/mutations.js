export const addBox = (state) => {
  state.boxes++;
};

export const removeBox = (state) => {
  state.boxes--;
};

export const addGridColumnValues = (state, { amount, unit }) => {
  state.gridColumns.push({ amount, unit });
};
