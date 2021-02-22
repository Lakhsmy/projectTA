import axios from "axios";

// Mutations
export const SET_QUESTION_LIST = "setQuestionList";
export const SET_CREATE_QUESTION = "setCreateQuestion";
// Actions
export const FETCH_QUESTION_LISTS = "fetchQuestionList";
export const CREATE_QUESTION = "createQuestion";

const question = {
  state: {
    questionList: [],
    createQuestion: {
      error: "",
      statusCode: "",
      message: []
    }
  },
  getters: {
    getQuestionList: state => {
      return state.questionList;
    }
  },
  mutations: {
    [SET_QUESTION_LIST]: (state, payload) => {
      state.questionList = payload;
    },
    [SET_CREATE_QUESTION]: (state, payload) => {
      state.createQuestion = payload;
    }
  },
  actions: {
    async [FETCH_QUESTION_LISTS]({ commit }) {
      try {
        const { data } = await axios.get(
          `${process.env.VUE_APP_API_URL}/question`
        );
        commit(SET_QUESTION_LIST, data);
      } catch (e) {
        console.error(e);
      }
    },
    async [CREATE_QUESTION]({ commit }, { payload }) {
      try {
        const { data } = await axios.post(
          `${process.env.VUE_APP_API_URL}/question`,
          payload
        );
        const result = {
          error: "",
          statusCode: "",
          message: []
        };
        commit(SET_CREATE_QUESTION, result);
        return data;
      } catch (e) {
        console.error(e);
      }
    }
  },
  namespaced: "question"
};

export default question;
