export const addBox = (state) => {
  state.boxes++;
};

export const removeBox = (state) => {
  state.boxes--;
};

export const addGridColumnValues = (state, { amount, unit }) => {
  state.styles.gridTemplateColumns.push({ amount, unit });
};
