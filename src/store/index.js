import Vue from "vue";
import Vuex from "vuex";
import auth from "./module/auth.module";
import user from "./module/user.module";
import question from "./module/question.module";
import questionSet from "./module/question-set.module";
import userQuestionAnswer from "./module/user-question-answer.module";
import saw from "./module/saw.module";
import createPersistedState from "vuex-persistedstate";

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
    user,
    question,
    questionSet,
    userQuestionAnswer,
    saw
  },
  plugins: [
    createPersistedState({
      storage: {
        getItem: key => localStorage.getItem(key),
        setItem: (key, value) => localStorage.setItem(key, value),
        removeItem: key => localStorage.removeItem(key)
      }
    })
  ]
});
