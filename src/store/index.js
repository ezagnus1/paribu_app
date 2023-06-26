import { createStore } from 'vuex';
import rootGetters from "./getters";
import rootMutations from "./mutations";
import rootActions from "./actions";

export default createStore({
  state() {
    return {
      currentUser: {}
    }
  },
  getters: rootGetters,
  mutations: rootMutations,
  actions: rootActions,
  modules: {}
});
