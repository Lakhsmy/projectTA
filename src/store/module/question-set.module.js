import axios from "axios";

// Mutations
export const SET_QUESTION_SET_LIST = "setQuestionSetList";
export const SET_CREATE_QUESTION_SET = "setCreateQuestionSet";
// Actions
export const FETCH_QUESTION_SET_LISTS = "fetchQuestionSetList";
export const CREATE_QUESTION_SET = "createQuestionSet";

const questionSet = {
  state: {
    questionSetList: [],
    createQuestionSet: {
      error: "",
      statusCode: "",
      message: []
    }
  },
  getters: {
    getQuestionSetList: state => {
      return state.questionSetList;
    }
  },
  mutations: {
    [SET_QUESTION_SET_LIST]: (state, payload) => {
      state.questionSetList = payload;
    },
    [SET_CREATE_QUESTION_SET]: (state, payload) => {
      state.createQuestionSet = payload;
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
      }
    }
  },
  namespaced: "questionSet"
};

export default questionSet;
