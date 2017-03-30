export const addBox = (state) => {
  state.boxes++;
};

export const removeBox = (state) => {
  state.boxes--;
};

export const addGridArrayValues = (state, { property, amount, unit }) => {
  state.styles[property].push({ amount, unit });
};

export const removeGridArrayValues = (state, property) => {
  state.styles[property].pop();
};

export const modifyPixelUnitVal = (state, { property, value }) => {
  state.styles[property].amount = `${value}`;
};

export const modifyWordUnitVal = (state, { property, unit }) => {
  state.styles[property].unit = `${unit}`;
};

export const modifyStringValue = (state, { property, value }) => {
  state.styles[property] = `${value}`;
};
