import axios from "axios";

const SET_APPLICANT_LIST = "setApplicantList";
const SET_CREATE_APPLICANT = "setCreateApplicant";

const user = {
  state: {
    applicantList: [],
    createApplicant: {
      error: "",
      statusCode: "",
      message: []
    }
  },
  getters: {
    getApplicantList: state => {
      return state.applicantList;
    }
  },
  mutations: {
    [SET_APPLICANT_LIST]: (state, payload) => {
      state.applicantList = payload;
    },
    [SET_CREATE_APPLICANT]: (state, payload) => {
      state.createApplicant = payload;
    }
  },
  actions: {
    async fetchApplicantList({ commit }) {
      try {
        const { data } = await axios.get(`${process.env.VUE_APP_API_URL}/auth`);
        commit(SET_APPLICANT_LIST, data);
      } catch (e) {
        console.error(e);
      }
    },
    async registerApplicant({ commit }, { payload }) {
      try {
        const { data } = await axios.post(
          `${process.env.VUE_APP_API_URL}/auth`,
          payload
        );
        const result = {
          error: "",
          statusCode: "",
          message: []
        };
        commit(SET_CREATE_APPLICANT, result);
        return data;
      } catch (e) {
        console.error(e);
      }
    }
  },
  namespaced: true
};

export default user;
