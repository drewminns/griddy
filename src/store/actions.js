export const addBoxes = ({ commit }) => {
  commit('addBox');
};

export const removeBoxes = ({ commit }) => {
  commit('removeBox');
};

export const addGridArrayValues = ({ commit }, values) => {
  commit('addGridArrayValues', values);
};

export const removeGridArrayValues = ({ commit }, property) => {
  commit('removeGridArrayValues', property);
};

export const modifyPixelUnitVal = ({ commit }, values) => {
  commit('modifyPixelUnitVal', values);
};

export const modifyWordUnitVal = ({ commit }, values) => {
  commit('modifyWordUnitVal', values);
};

export const modifyAlignJustifyVal = ({ commit }, value) => {
  commit('modifyStringValue', value);
};
