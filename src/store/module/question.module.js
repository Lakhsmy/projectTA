import axios from "axios";

// Mutations
export const SET_QUESTION_LIST = "setQuestionList";
export const SET_CREATE_QUESTION = "setCreateQuestion";
export const SET_QUESTION = "setQuestion";
// Actions
export const FETCH_QUESTION_LISTS = "fetchQuestionList";
export const CREATE_QUESTION = "createQuestion";
export const FETCH_QUESTION = "fetchQuestion";
export const UPDATE_QUESTION = "updateQuestion";
export const DELETE_QUESTION = "deleteQuestion";
export const RESET_QUESTION = "resetQuestion";

const question = {
  state: {
    questionList: [],
    questionData: {
      question: "",
      questionType: "MultipleChoice",
      questionCategory: "",
      answerOptions: []
    },
    createQuestion: {
      error: "",
      statusCode: "",
      message: []
    },
    error: {}
  },
  getters: {
    getQuestionList: state => {
      return state.questionList;
    },
    getQuestion: state => {
      return state.questionData;
    }
  },
  mutations: {
    [SET_QUESTION_LIST]: (state, payload) => {
      state.questionList = payload;
    },
    [SET_CREATE_QUESTION]: (state, payload) => {
      state.createQuestion = payload;
    },
    [SET_QUESTION]: (state, payload) => {
      state.questionData = payload;
    },
    setError: (state, payload) => {
      state.error = payload;
    }
  },
  actions: {
    async [FETCH_QUESTION_LISTS](
      { commit },
      { questionCategory } = { questionCategory: null }
    ) {
      try {
        const params = new URLSearchParams();
        if (questionCategory != null) {
          params.append("questionCategory", questionCategory);
        }
        const { data } = await axios.get(
          `${process.env.VUE_APP_API_URL}/question?${params}`
        );
        commit(SET_QUESTION_LIST, data);
      } catch (e) {
        console.error(e);
      }
    },
    async [RESET_QUESTION]({ commit }) {
      const initialData = {
        question: "",
        questionType: "MultipleChoice",
        questionCategory: "",
        answerOptions: []
      };
      commit(SET_QUESTION, initialData);
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
        throw new Error(e.message);
      }
    },
    async [FETCH_QUESTION]({ commit }, { id }) {
      try {
        const { data } = await axios.get(
          `${process.env.VUE_APP_API_URL}/question/${id}`
        );

        commit(SET_QUESTION, data);
        return data;
      } catch (e) {
        console.error(e);
      }
    },
    async [UPDATE_QUESTION]({ commit }, { id, payload }) {
      try {
        const { data } = await axios.put(
          `${process.env.VUE_APP_API_URL}/question/${id}`,
          payload
        );

        // commit(SET_QUESTION, data);
        return data;
      } catch (e) {
        commit("setError", e);
        console.error(e);
        throw new Error(e.message);
      }
    },
    async [DELETE_QUESTION]({ commit }, { id }) {
      try {
        const { data } = await axios.delete(
          `${process.env.VUE_APP_API_URL}/question/${id}`
        );

        commit(SET_QUESTION, data);
        return data;
      } catch (e) {
        console.error(e);
      }
    }
  },
  namespaced: true
};

export default question;
