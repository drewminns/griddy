function valuesToString (data) {
  let stringVal = '';
  data.forEach((val) => {
    stringVal += `${val.amount}${val.unit} `;
  });
  return stringVal.trim();
};

export const gridColumns = (state) => {
  return valuesToString(state.gridColumns);
};

export const gridRows = (state) => {
  return valuesToString(state.gridRows);
};
