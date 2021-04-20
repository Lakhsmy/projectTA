import axios from "axios";

// Mutations
export const SET_USER_QUESTION_ANSWER_LIST = "setUserQuestionAnswerList";
// export const SET_CREATE_QUESTION_SET = "setCreateQuestionSet";
export const SET_USER_QUESTION_ANSWER = "setUserQuestionAnswer";
export const SET_USER_QUESTION_ANSWER_ERROR = "setUserQuestionAnswerError";
// Actions
export const FETCH_USER_QUESTION_ANSWER_LIST = "fetchUserQuestionAnswerList";
export const FETCH_USER_QUESTION_ANSWER = "fetchUserQuestionAnswer";
export const FETCH_CURRENT_USER_QUESTION_ANSWER =
  "fetchCurrentUserQuestionAnswer";
export const CREATE_CURRENT_USER_QUESTION_ANSWER =
  "createCurrentUserQuestionAnswer";
export const RESET_USER_QUESTION_ANSWER = "resetUserQuestionAnswer";
export const UPDATE_USER_QUESTION_ANSWER = "updateUserQuestionAnswer";
export const SUBMIT_CURRENT_USER_QUESTION_ANSWER =
  "submitCurrentUserQuestionAnswer";
export const CALCULATE_USER_QUESTION_ANSWER = "calculateUserQuestion";

const userQuestionAnswer = {
  state: {
    userQuestionAnswerList: [],
    userQuestionAnswer: {},

    userQuestionAnswerError: {
      error: "",
      statusCode: "",
      message: []
    },
    userResultList: [],
    userInterviewList: [],
    userMicroteachingList: []
  },
  getters: {
    getUserQuestionAnswerList: state => {
      return state.userQuestionAnswerList;
    },
    getUserQuestionAnswer: state => {
      return state.userQuestionAnswer;
    }
  },
  mutations: {
    [SET_USER_QUESTION_ANSWER_LIST]: (state, payload) => {
      state.userQuestionAnswerList = payload;
    },
    [SET_USER_QUESTION_ANSWER_ERROR]: (state, payload) => {
      state.userQuestionAnswerError = payload;
    },
    [SET_USER_QUESTION_ANSWER]: (state, payload) => {
      state.userQuestionAnswer = payload;
    },
    setUserResultList: (state, payload) => {
      state.userResultList = payload;
    }
  },
  actions: {
    async [FETCH_USER_QUESTION_ANSWER_LIST]({ commit }) {
      try {
        const { data } = await axios.get(
          `${process.env.VUE_APP_API_URL}/question-set`
        );
        commit(SET_USER_QUESTION_ANSWER_LIST, data);
      } catch (e) {
        console.error(e);
      }
    },
    async changeQuestionStatus(context, { id, status }) {
      const payload = {
        status
      };
      await axios.post(
        `${process.env.VUE_APP_API_URL}/user-question-answer/change-status/${id}`,
        payload
      );
    },
    async getAllUserQuestionAnswer(
      { commit },
      { category, status } = { category: null, status: null }
    ) {
      const params = new URLSearchParams();
      if (category != null) {
        params.append("category", category);
      }
      if (status != null) {
        params.append("status", status);
      }

      const { data } = await axios.get(
        `${process.env.VUE_APP_API_URL}/user-question-answer?${params}`
      );
      commit("setUserResultList", data);
    },
    async [RESET_USER_QUESTION_ANSWER]({ commit }) {
      const questionSetData = {
        title: "",
        questionSetCategory: "",
        category: "",
        questionSet: []
      };
      commit(SET_USER_QUESTION_ANSWER, questionSetData);
    },

    async [FETCH_CURRENT_USER_QUESTION_ANSWER]({ commit }, { category }) {
      try {
        const { data } = await axios.get(
          `${process.env.VUE_APP_API_URL}/user-question-answer/current/${category}`
        );
        commit(SET_USER_QUESTION_ANSWER, data.data);
        return data.data;
      } catch (e) {
        throw new Error(e.message);
      }
    },

    async [FETCH_USER_QUESTION_ANSWER]({ commit }, { id }) {
      try {
        const { data } = await axios.get(
          `${process.env.VUE_APP_API_URL}/question-set/${id}`
        );
        commit(SET_USER_QUESTION_ANSWER, data);
      } catch (e) {
        throw new Error(e.message);
      }
    },

    async [SUBMIT_CURRENT_USER_QUESTION_ANSWER]({ commit }, { payload }) {
      try {
        const { data } = await axios.post(
          `${process.env.VUE_APP_API_URL}/user-question-answer/submit-question`,
          payload
        );
        return data;
      } catch (e) {
        console.log(e);
        if (e.response.status > 400) {
          let error = e.response.data;
          commit(SET_USER_QUESTION_ANSWER, error);
        }
        throw new Error(e.message);
      }
    },

    async [CALCULATE_USER_QUESTION_ANSWER]({ commit }, { _id, category }) {
      try {
        const { data } = await axios.post(
          `${process.env.VUE_APP_API_URL}/user-question-answer/calculate`,
          {
            _id,
            category
          }
        );
        return data;
      } catch (e) {
        if (e.response.status > 400) {
          let error = e.response.data;
          commit(SET_USER_QUESTION_ANSWER_ERROR, error);
        }

        throw new Error(e.message);
      }
    },

    async [CREATE_CURRENT_USER_QUESTION_ANSWER]({ commit }, { category }) {
      try {
        const { data } = await axios.post(
          `${process.env.VUE_APP_API_URL}/user-question-answer/current/${category}`
        );

        return data;
      } catch (e) {
        console.error(e);
        if (e.response.status > 400) {
          let error = e.response.data;
          commit(SET_USER_QUESTION_ANSWER, error);
        }

        throw new Error(e.message);
      }
    },
    async [UPDATE_USER_QUESTION_ANSWER]({ commit }, { id, payload }) {
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

export default userQuestionAnswer;
