import {
  valuesToString,
  unRollString,
  unpackObject
} from '../lib/utils';

export const gridColumns = (state) => {
  return valuesToString(state.styles.gridTemplateColumns);
};

export const gridRows = (state) => {
  return valuesToString(state.styles.gridTemplateRows);
};

export const gridColumnGapString = (state) => {
  return unpackObject(state.styles.gridColumnGap);
};

export const gridRowGapString = (state) => {
  return unpackObject(state.styles.gridRowGap);
};

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
    } else if (typeof state.styles[key] === 'object') {
      styles[key] = unpackObject(state.styles[key]);
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
    } else if (typeof state.styles[key] === 'object') {
      styles += `    ${unRollString(key)}: ${unpackObject(state.styles[key])}\n`;
    } else if (!Array.isArray(state.styles[key]) && state.styles[key] !== null) {
      styles += `    ${unRollString(key)}: ${state.styles[key]};\n`;
    }
  });
  return styles;
};
