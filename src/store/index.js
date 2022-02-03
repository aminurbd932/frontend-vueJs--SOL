import Vue from 'vue'
import Vuex from 'vuex'
import product from './product';
import order from './order';
import card from './card';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    product,
    order,
    card
  }
})
