import $ from 'jquery'
import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'

Vue.use(Vuex);
console.info($);
const state={
  maxLeft:0,
  minTop:0,
  mapPosition:{
    _top:0,
    _left:0,
    top_:0,
    left_:0
  },
  baseWidth:40,
};
const store=new Vuex.Store({
  state,
  getters,
  actions,
  mutations
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
      mutations: require('./mutations')
    })
  })
}

export default store;
