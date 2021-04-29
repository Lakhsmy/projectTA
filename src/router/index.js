import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/user/Home.vue";
import store from "@/store/index";

Vue.use(VueRouter);

const routes = [
  //--------------------------- USER ----------------------------//
  {
    path: "/",
    name: "Home",
    meta: {
      needAuth: true
    },
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "Information" */ "../views/Login.vue")
  },
  {
    path: "/alur",
    name: "Alur",
    component: () =>
      import(/* webpackChunkName: "Information" */ "../views/user/Alur.vue")
  },
  {
    path: "/job",
    name: "Job",
    component: () =>
      import(/* webpackChunkName: "JobVacancies" */ "../views/user/Job.vue")
  },
  {
    path: "/data-pelamar",
    name: "DataPelamar",
    component: () =>
      import(/* webpackChunkName: "JobVacancies" */ "../views/data-pelamar.vue")
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "JobVacancies" */ "../views/Register.vue")
  },
  //---------------------------- REGISTRATION -------------------------//
  {
    path: "/registration",
    name: "Registration",
    component: () =>
      import(
        /* webpackChunkName: "JobVacancies" */ "../views/user/Registration/Registration.vue"
      )
  },
  {
    path: "/regisdoc",
    name: "RegisDoc",
    component: () =>
      import(
        /* webpackChunkName: "JobVacancies" */ "../views/user/Registration/RegisDoc.vue"
      )
  },
  //---------------------------- BAGIAN 1 -------------------------//
  // {
  //   path: "/bagian1",
  //   name: "Bagian1",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(
  //       /* webpackChunkName: "JobVacancies" */ "../views/user/Bagian1/Bagian1.vue"
  //     )
  // },
  {
    path: "/penyeleksian",
    name: "Penyeleksian",
    component: () =>
      import(
        /* webpackChunkName: "Information" */ "../views/user/Penyeleksian/Penyeleksian.vue"
      )
  },
  //------------------------------------- END -------------------------------//
  {
    path: "/spesifikasi",
    name: "Spesifikasi",
    component: () =>
      import(
        /* webpackChunkName: "JobVacancies" */ "../views/user/Spesifikasi.vue"
      )
  },
  //--------------------------- HDC ----------------------------//
  {
    path: "/nilai-psikotest",
    name: "NilaiPsikotest",
    component: () =>
      import(
        /* webpackChunkName: "JobVacancies" */ "../views/hdc/NilaiPsikotest.vue"
      )
  },
  {
    path: "/pengumuman",
    name: "Pengumuman",
    component: () =>
      import(
        /* webpackChunkName: "JobVacancies" */ "../views/hdc/pengumuman.vue"
      )
  },
  {
    path: "/lolos-psikotest",
    name: "LolosPsikotest",
    component: () =>
      import(
        /* webpackChunkName: "JobVacancies" */ "../views/hdc/LolosPsikotest.vue"
      )
  },
  //--------------------------- KAPRODI ----------------------------//
  {
    path: "/form-interview-satu",
    name: "FormInterviewSatu",
    component: () =>
      import(
        /* webpackChunkName: "JobVacancies" */ "../views/kaprodi/FormInterviewSatu.vue"
      )
  },
  {
    path: "/nilai-interview-satu",
    name: "NilaiInterviewSatu",
    component: () =>
      import(
        /* webpackChunkName: "JobVacancies" */ "../views/kaprodi/NilaiInterviewSatu.vue"
      )
  },
  {
    path: "/psikotest",
    name: "Psikotes",
    meta: {
      needAuth: true
    },
    component: () =>
      import(
        /* webpackChunkName: "JobVacancies" */ "../views/user/Psikotest.vue"
      )
  },

  {
    path: "/nilai-mikroteaching",
    name: "NilaiMikroteaching",
    component: () =>
      import(
        /* webpackChunkName: "JobVacancies" */ "../views/kaprodi/NilaiMikroteaching.vue"
      )
  },
  {
    path: "/form-mikroteaching",
    name: "FormMikroteaching",
    component: () =>
      import(
        /* webpackChunkName: "JobVacancies" */ "../views/kaprodi/FormMikroteaching.vue"
      )
  },
  {
    path: "/tahap-satu", //pengumuman hasil SAW tahap 1
    name: "TahapSatu",
    component: () =>
      import(
        /* webpackChunkName: "JobVacancies" */ "../views/kaprodi/TahapSatu.vue"
      )
  },
  //--------------------------- REKTORAT ----------------------------//
  {
    path: "/nilai-interview-dua", //pengumuman hasil SAW tahap 1
    name: "NilaiInterviewDua",
    component: () =>
      import(
        /* webpackChunkName: "JobVacancies" */ "../views/rektorat/NilaiInterviewDua.vue"
      )
  },
  {
    path: "/form-interview-dua", //pengumuman hasil SAW tahap 1
    name: "FormInterviewDua",
    component: () =>
      import(
        /* webpackChunkName: "JobVacancies" */ "../views/rektorat/FormInterviewDua.vue"
      )
  },
  {
    path: "/tahap-dua", //pengumuman hasil SAW tahap 1
    name: "TahapDua",
    component: () =>
      import(
        /* webpackChunkName: "JobVacancies" */ "../views/rektorat/TahapDua.vue"
      )
  },
  {
    path: "/data-lengkap", //pengumuman hasil SAW tahap 1
    name: "data-lengkap",
    component: () =>
      import(/* webpackChunkName: "JobVacancies" */ "../views/data-lengkap.vue")
  },
  //---------------------------- REGISTRATION -------------------------//
  {
    path: "/question",
    name: "QuestionList",
    component: () =>
      import(
        /* webpackChunkName: "JobVacancies" */ "../views/admin/question/QuestionList.vue"
      )
  },
  {
    path: "/question/:action",
    name: "QuestionCreate",
    component: () =>
      import(
        /* webpackChunkName: "JobVacancies" */ "../views/admin/question/QuestionForm.vue"
      )
  },
  {
    path: "/question/:action/:id",
    name: "QuestionEdit",
    component: () =>
      import(
        /* webpackChunkName: "JobVacancies" */ "../views/admin/question/QuestionForm.vue"
      )
  },
  {
    path: "/question-set",
    name: "QuestionSetList",
    component: () =>
      import(
        /* webpackChunkName: "JobVacancies" */ "../views/admin/question-set/QuestionSetList.vue"
      )
  },
  {
    path: "/question-set/:action",
    name: "QuestionSetCreate",
    component: () =>
      import(
        /* webpackChunkName: "JobVacancies" */ "../views/admin/question-set/QuestionSetForm.vue"
      )
  },
  {
    path: "/question-set/:action/:id",
    name: "QuestionSetEdit",
    component: () =>
      import(
        /* webpackChunkName: "JobVacancies" */ "../views/admin/question-set/QuestionSetForm.vue"
      )
  }
];

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});

router.beforeEach(async (to, from, next) => {
  const isAuthenticated = store.getters["auth/isAuthenticated"];

  const requiredAuth = to.matched.some(record => record.meta.needAuth);
  // console.log("required", requiredAuth);
  // console.log("isAuthenticated", isAuthenticated);
  try {
    if (requiredAuth && !isAuthenticated) {
      console.log("gagal");
      next("/login");
    } else if (requiredAuth && isAuthenticated) {
      console.log("berhasil");
      await store.dispatch("auth/getProfile");
      next();
    } else {
      next();
    }
  } catch (error) {
    // console.log(error.message);
    if (error.message == 401) {
      next("/login");
    } else {
      next();
    }
  }
});

export default router;
