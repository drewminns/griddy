function valuesToString (data) {
  let stringVal = '';
  data.forEach((val) => {
    stringVal += `${val.amount}${val.unit} `;
  });
  return stringVal.trim();
};

function unRollString (val) {
  const dashed = val.replace(/([A-Z])/g, function ($1) {
    return '-' + $1.toLowerCase();
  });
  return dashed;
}

/*
 * Returns a CSS styles object of grid structure.
 * @param {object} state - The entire stateobject
 * @return {object}
 */
export const styleObj = (state) => {
  const styles = {};
  Object.keys(state.styles).forEach((key) => {
    if (Array.isArray(state.styles[key]) && state.styles[key].length > 0) {
      styles[key] = valuesToString(state.styles[key]);
    } else if (!Array.isArray(state.styles[key]) && state.styles[key] !== null) {
      styles[key] = state.styles[key];
    }
  });
  return styles;
};

/*
 * Returns a CSS styles string of grid structure.
 * @param {object} state - The entire stateobject
 * @return {string}
 */
export const styleString = (state) => {
  let styles = '';
  Object.keys(state.styles).forEach((key, index) => {
    if (Array.isArray(state.styles[key]) && state.styles[key].length > 0) {
      styles += `    ${unRollString(key)}: ${valuesToString(state.styles[key])};\n`;
    } else if (!Array.isArray(state.styles[key]) && state.styles[key] !== null) {
      styles += `    ${unRollString(key)}: ${state.styles[key]};\n`;
    }
  });
  return styles;
};
