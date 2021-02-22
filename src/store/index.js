import Vue from "vue";
import Vuex from "vuex";

import auth from "./module/auth.module";
import questionSet from "./module/question-set.module";
import question from "./module/question.module";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sideBarOpen: false
  },
  getters: {
    sideBarOpen: state => {
      return state.sideBarOpen;
    }
  },
  mutations: {
    toggleSidebar(state) {
      state.sideBarOpen = !state.sideBarOpen;
    }
  },
  actions: {
    toggleSidebar(context) {
      context.commit("toggleSidebar");
    }
  },
  modules: {
    auth,
    questionSet,
    question
  }
});
