import axios from "axios";
const SET_CREATE_APPLICANT = "setCreateApplicant";

const state = {
  errorData: {
    errors: []
  },
  profile: {},
  token: ""
};
const getters = {
  isAuthenticated(state) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${state.token}`;
    return !!state.token;
  }
};
const mutations = {
  setProfile(state, payload) {
    state.profile = payload;
  },
  setToken(state, payload) {
    state.token = payload;
  },
  setError(state, payload) {
    state.errorData = payload;
  },
  purgeAuth(state) {
    state.profile = {};
    state.token = "";
  },
  [SET_CREATE_APPLICANT]: (state, payload) => {
    state.createApplicant = payload;
  }
};
const actions = {
  // fungsi handle auth
  async handleLogin(context, { payload }) {
    try {
      //masukin data yang di fetch dari api ke dalam variable response
      const { data } = await axios.post(
        `${process.env.VUE_APP_API_URL}/auth/login`,
        //payload di sini berfungsi untuk mengisi data yang di transfer ke api
        // dalam kasus ini email dan password yang di ambil dari auth.vue
        payload
      );

      //data user yang sudah di ambil kemdian di se ke variable setprofile dengan
      context.commit("setProfile", data.user);
      context.commit("setToken", data.access_token);
      localStorage.setItem("token", data.access_token);
      return data;
    } catch (error) {
      let errorMessage = "";
      if (error.response) {
        errorMessage = "Error";
      }
      if (error.response.status == 401) {
        console.error("masuk error", error.response);
        throw new Error(errorMessage);
      } else if (error.response.status == 400) {
        context.commit("setError", error.response.data);
        throw new Error(errorMessage);
      }

      return error.message;
    }
  },
  async getProfile(context) {
    if (localStorage.getItem("token")) {
      try {
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${context.state.token}`;
        const response = await axios.get(
          `${process.env.VUE_APP_API_URL}/auth/profile`
        );
        context.commit("setProfile", response.data);
      } catch (error) {
        console.log("gagal disini");
        if (error.response && error.response.status === 401) {
          context.commit("purgeAuth");
        }
      }
    } else {
      context.commit("purgeAuth");
    }
  },
  async registerApplicant({ commit }, { payload }) {
    try {
      const { data } = await axios.post(
        `${process.env.VUE_APP_API_URL}/auth/register`,
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
  },

  async handleLogOut(context) {
    try {
      await axios.get(`${process.env.VUE_APP_API_URL}/api/auth`);
      context.commit("purgeAuth");
    } catch (error) {
      console.error(error);
    }
  }
};

const auth = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

export default auth;
