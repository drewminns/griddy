import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from './getters';
import * as actions from './actions';
import * as mutations from './mutations';

Vue.use(Vuex);

const state = {
  boxes: [
    {
      gridColumnStart: 'auto',
      gridColumnEnd: 'auto',
      gridRowStart: 'auto',
      gridRowEnd: 'auto'
    },
    {
      gridColumnStart: 'auto',
      gridColumnEnd: 'auto',
      gridRowStart: 'auto',
      gridRowEnd: 'auto'
    },
    {
      gridColumnStart: 'auto',
      gridColumnEnd: 'auto',
      gridRowStart: 'auto',
      gridRowEnd: 'auto'
    },
    {
      gridColumnStart: 'auto',
      gridColumnEnd: 'auto',
      gridRowStart: 'auto',
      gridRowEnd: 'auto'
    }
  ],
  styles: {
    gridTemplateColumns: [
      { amount: 1, unit: 'fr' },
      { amount: 200, unit: 'px' },
      { amount: 1, unit: 'fr' }
    ],
    gridTemplateRows: [
      { amount: 2, unit: 'fr' },
      { amount: 100, unit: 'px' }
    ],
    gridColumnGap: {
      amount: 20,
      unit: 'px'
    },
    gridRowGap: {
      amount: 20,
      unit: 'px'
    },
    justifyItems: 'stretch',
    alignItems: 'stretch',
    justifyContent: 'stretch',
    alignContent: 'stretch',
  }
};

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});

if (module.hot) {
  module.hot.accept([
    './getters',
    './actions',
    './mutations'
  ], () => {
    store.hotUpdate({
      getters: require('./getters'),
      actions: require('./actions'),
      mutations: require('./mutations'),
    });
  });
}

export default store;
