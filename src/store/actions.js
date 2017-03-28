export const addBoxes = ({ commit }) => {
  commit('addBox');
};

export const removeBoxes = ({ commit }) => {
  commit('removeBox');
};

export const addGridColumnValues = ({ commit }, values) => {
  commit('addGridColumnValues', values);
};
