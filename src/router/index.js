import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/user/Home.vue";

Vue.use(VueRouter);

const routes = [
  //--------------------------- USER ----------------------------//
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Information" */ "../views/Login.vue")
  },
  {
    path: "/alur",
    name: "Alur",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Information" */ "../views/user/Alur.vue")
  },
  {
    path: "/job",
    name: "Job",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "JobVacancies" */ "../views/user/Job.vue")
  },
  //---------------------------- REGISTRATION -------------------------//
  {
    path: "/register",
    name: "Register",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "JobVacancies" */ "../views/Register.vue")
  },
  {
    path: "/registration",
    name: "Registration",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "JobVacancies" */ "../views/user/Registration/Registration.vue"
      )
  },
  {
    path: "/regisdoc",
    name: "RegisDoc",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "Information" */ "../views/user/Penyeleksian/Penyeleksian.vue"
      )
  },
  //------------------------------------- END -------------------------------//
  {
    path: "/spesifikasi",
    name: "Spesifikasi",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "JobVacancies" */ "../views/user/Spesifikasi.vue"
      )
  },
  //--------------------------- HDC ----------------------------//
  {
    path: "/data-hdc",
    name: "DataHdc",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "JobVacancies" */ "../views/hdc/DataHdc.vue")
  },
  {
    path: "/nilai-psikotest",
    name: "NilaiPsikotest",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "JobVacancies" */ "../views/hdc/NilaiPsikotest.vue"
      )
  },
  {
    path: "/pengumuman",
    name: "Pengumuman",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "JobVacancies" */ "../views/hdc/pengumuman.vue"
      )
  },
  //--------------------------- KAPRODI ----------------------------//
  {
    path: "/data-kaprodi",
    name: "DataKaprodi",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "JobVacancies" */ "../views/kaprodi/DataKaprodi.vue"
      )
  },
  {
    path: "/form-interview-satu",
    name: "FormInterviewSatu",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "JobVacancies" */ "../views/kaprodi/FormInterviewSatu.vue"
      )
  },
  {
    path: "/nilai-interview-satu",
    name: "NilaiInterviewSatu",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "JobVacancies" */ "../views/kaprodi/NilaiInterviewSatu.vue"
      )
  },
  {
    path: "/psikotest",
    name: "Psikotes",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "JobVacancies" */ "../views/user/Psikotest.vue"
      )
  },

  {
    path: "/nilai-mikroteaching",
    name: "NilaiMikroteaching",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "JobVacancies" */ "../views/kaprodi/NilaiMikroteaching.vue"
      )
  },
  {
    path: "/form-mikroteaching",
    name: "FormMikroteaching",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "JobVacancies" */ "../views/kaprodi/FormMikroteaching.vue"
      )
  },
  {
    path: "/tahap-satu", //pengumuman hasil SAW tahap 1
    name: "TahapSatu",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "JobVacancies" */ "../views/kaprodi/TahapSatu.vue"
      )
  },
  //--------------------------- REKTORAT ----------------------------//
  {
    path: "/data-rektorat", //pengumuman hasil SAW tahap 1
    name: "DataRektorat",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "JobVacancies" */ "../views/rektorat/DataRektorat.vue"
      )
  },
  {
    path: "/nilai-interview-dua", //pengumuman hasil SAW tahap 1
    name: "NilaiInterviewDua",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "JobVacancies" */ "../views/rektorat/NilaiInterviewDua.vue"
      )
  },
  {
    path: "/form-interview-dua", //pengumuman hasil SAW tahap 1
    name: "FormInterviewDua",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "JobVacancies" */ "../views/rektorat/FormInterviewDua.vue"
      )
  },
  {
    path: "/tahap-dua", //pengumuman hasil SAW tahap 1
    name: "TahapDua",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "JobVacancies" */ "../views/rektorat/TahapDua.vue"
      )
  }
];

const router = new VueRouter({
  routes
});

export default router;
