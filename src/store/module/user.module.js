import axios from "axios";

const SET_USER_LIST = "setUserList";
// const SET_CREATE_APPLICANT = "setCreateApplicant";

const user = {
  state: {
    userList: [],
    createApplicant: {
      error: "",
      statusCode: "",
      message: []
    }
  },
  getters: {
    getUserList: state => {
      return state.userList;
    }
  },
  mutations: {
    [SET_USER_LIST]: (state, payload) => {
      state.userList = payload;
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
    }
  },
  namespaced: true
};

export default user;
