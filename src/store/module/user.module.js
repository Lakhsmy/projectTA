import axios from "axios";

const SET_USER_LIST = "setUserList";

const user = {
  state: {
    userList: [],
    createApplicant: {
      error: "",
      statusCode: "",
      message: []
    },
    cvData: {}
  },
  getters: {
    getUserList: state => {
      return state.userList;
    }
  },
  mutations: {
    [SET_USER_LIST]: (state, payload) => {
      state.userList = payload;
    },
    setCVData: (state, payload) => {
      state.cvData = payload;
    }
  },
  actions: {
    async fetchUserList({ commit }) {
      try {
        const { data } = await axios.get(`${process.env.VUE_APP_API_URL}/user`);
        commit(SET_USER_LIST, data);
      } catch (e) {
        console.error(e);
      }
    },
    async uploadCV({ commit }, { payload }) {
      try {
        const { data } = await axios.post(
          `${process.env.VUE_APP_API_URL}/user/upload-cv`,
          payload
        );
        commit("setCVData", data.data);
      } catch (e) {
        throw new Error(e.message);
      }
    }
  },
  namespaced: true
};

export default user;
