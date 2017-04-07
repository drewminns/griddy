export const addBox = (state) => {
  state.boxes.push({
    gridColumnStart: 'auto',
    gridColumnEnd: 'auto',
    gridRowStart: 'auto',
    gridRowEnd: 'auto'
  });
};

export const removeBox = (state) => {
  state.boxes.pop();
};

export const addGridArrayValues = (state, { property, amount, unit }) => {
  state.styles[property].push({ amount, unit });
};

export const removeGridArrayValues = (state, property) => {
  state.styles[property.type].splice(property.index, 1);
};

export const modifyPixelUnitVal = (state, { property, value }) => {
  state.styles[property].amount = `${value}`;
};

export const modifyWordUnitVal = (state, { property, unit }) => {
  state.styles[property].unit = `${unit}`;
};

export const modifyArrayVal = (state, { property, val, unit, index }) => {
  console.log(property, val, unit, index);
  state.styles[property][index][val] = `${unit}`;
};

export const modifyStringValue = (state, { property, value }) => {
  state.styles[property] = `${value}`;
};
