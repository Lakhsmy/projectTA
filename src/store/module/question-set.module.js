import axios from "axios";

// Mutations
export const SET_QUESTION_SET_LIST = "setQuestionSetList";
export const SET_CREATE_QUESTION_SET = "setCreateQuestionSet";
export const SET_QUESTION_SET = "setQuestionSet";
// Actions
export const FETCH_QUESTION_SET_LISTS = "fetchQuestionSetList";
export const FETCH_QUESTION_SET = "fetchQuestionSet";
export const CREATE_QUESTION_SET = "createQuestionSet";
export const RESET_QUESTION_SET = "resetQuestionSet";
export const UPDATE_QUESTION_SET = "updateQuestionSet";

const questionSet = {
  state: {
    questionSetList: [],
    questionSetData: {
      title: "",
      questionSetCategory: "",
      questionSet: []
    },
    createQuestionSet: {
      error: "",
      statusCode: "",
      message: []
    }
  },
  getters: {
    getQuestionSetList: state => {
      return state.questionSetList;
    },
    getQuestionSet: state => {
      return state.questionSetData;
    }
  },
  mutations: {
    [SET_QUESTION_SET_LIST]: (state, payload) => {
      state.questionSetList = payload;
    },
    [SET_CREATE_QUESTION_SET]: (state, payload) => {
      state.createQuestionSet = payload;
    },
    [SET_QUESTION_SET]: (state, payload) => {
      state.questionSetData = payload;
    }
  },
  actions: {
    async [FETCH_QUESTION_SET_LISTS]({ commit }) {
      try {
        const { data } = await axios.get(
          `${process.env.VUE_APP_API_URL}/question-set`
        );
        commit(SET_QUESTION_SET_LIST, data);
      } catch (e) {
        console.error(e);
      }
    },
    async [RESET_QUESTION_SET]({ commit }) {
      const questionSetData = {
        title: "",
        questionSetCategory: "",
        questionSet: []
      };
      commit(SET_QUESTION_SET, questionSetData);
    },

    async [FETCH_QUESTION_SET]({ commit }, { id }) {
      try {
        const { data } = await axios.get(
          `${process.env.VUE_APP_API_URL}/question-set/${id}`
        );
        commit(SET_QUESTION_SET, data);
      } catch (e) {
        throw new Error(e.message);
      }
    },

    async [CREATE_QUESTION_SET]({ commit }, { payload }) {
      try {
        const { data } = await axios.post(
          `${process.env.VUE_APP_API_URL}/question-set`,
          payload
        );
        const result = {
          error: "",
          statusCode: "",
          message: []
        };
        commit(SET_CREATE_QUESTION_SET, result);
        return data;
      } catch (e) {
        console.error(e);
        throw new Error(e.message);
      }
    },
    async [UPDATE_QUESTION_SET]({ commit }, { id, payload }) {
      try {
        const { data } = await axios.put(
          `${process.env.VUE_APP_API_URL}/question-set/${id}`,
          payload
        );

        // commit(SET_QUESTION, data);
        return data;
      } catch (e) {
        commit("setError", e);
        console.error(e);
        throw new Error(e.message);
      }
    }
  },
  namespaced: true
};

export default questionSet;
