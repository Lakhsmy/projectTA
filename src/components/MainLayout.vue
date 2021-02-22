<template>
  <div class="h-full flex flex-row w-full">
    <div
      class="flex w-1/6 flex-col justify-between bg-blue-200  flex-grow h-full"
    >
      <div class="flex flex-col w-full">
        <div class="mx-2 mt-0 text-black font-bold">
          <router-link to="/" class="nav-link"
            ><img src="https://upj.ac.id/upload/module/logo/logo2.png"
          /></router-link>
        </div>
        <!-- User -->
        <div class="mx-5 mt-10 text-black font-bold ">
          <router-link to="/" class="nav-link flex flex-row">
            <div>
              Home
            </div>
          </router-link>
        </div>

        <div class="mx-5 mt-5 text-black font-bold">
          <router-link to="/spesifikasi" class="nav-link"
            >Kualifikasi</router-link
          >
        </div>

        <div class="mx-5 mt-5 text-black font-bold">
          <router-link to="/alur" class="nav-link">Alur</router-link>
        </div>

        <!-- <div class="mx-5 mt-5 text-black font-bold">
          <router-link to="/job" class="nav-link">Job</router-link>
        </div> -->

        <div class="mx-5 mt-10 text-black font-bold ">
          <router-link to="/psikotest" class="nav-link flex flex-row">
            <div>
              PsikoTest
            </div>
          </router-link>
        </div>

        <!-- HDC -->
        <div class="mx-5 mt-5 text-black font-bold">
          <router-link to="/data-hdc" class="nav-link">Data HDC</router-link>
        </div>
        <!-- <div class="mx-5 mt-5 text-black font-bold">
          <router-link to="/nilai-psikotest" class="nav-link"
            >Nilai Psikotest</router-link
          >
        </div> -->

        <!-- Kaprodi -->
        <div class="mx-5 mt-5 text-black font-bold">
          <router-link to="/data-kaprodi" class="nav-link"
            >Data Kaprodi</router-link
          >
        </div>

        <!-- <div class="mx-5 mt-5 text-black font-bold">
          <router-link to="/form-interview-satu" class="nav-link"
            >Form Interview Satu</router-link
          >
        </div>

        <div class="mx-5 mt-5 text-black font-bold">
          <router-link to="/nilai-interview-satu" class="nav-link"
            >Nilai Interview Satu</router-link
          >
        </div>

        <div class="mx-5 mt-5 text-black font-bold">
          <router-link to="/nilai-mikroteaching" class="nav-link"
            >Nilai Mikroteaching</router-link
          >
        </div>

        <div class="mx-5 mt-5 text-black font-bold">
          <router-link to="/form-mikroteaching" class="nav-link"
            >Form Nilai Mikroteaching</router-link
          >
        </div>

        <div class="mx-5 mt-5 text-black font-bold">
          <router-link to="/tahap-satu" class="nav-link"
            >Tahap Satu</router-link
          >
        </div> -->

        <!-- Rektorat -->
        <div class="mx-5 mt-5 text-black font-bold">
          <router-link to="/data-rektorat" class="nav-link"
            >Data Rektorat</router-link
          >
        </div>

        <!-- <div class="mx-5 mt-5 text-black font-bold">
          <router-link to="/form-interview-dua" class="nav-link"
            >Form Interview Dua</router-link
          >
        </div>

        <div class="mx-5 mt-5 text-black font-bold">
          <router-link to="/nilai-interview-dua" class="nav-link"
            >Nilai Interview Dua</router-link
          >
        </div>

        <div class="mx-5 mt-5 text-black font-bold">
          <router-link to="/tahap-dua" class="nav-link">Tahap Dua</router-link>
        </div> -->

        <!-- Registrasi -->
        <div class="mx-5 mt-52 text-black font-bold">
          <router-link to="/register" class="nav-link">Register</router-link>
        </div>

        <div class="mx-5 mt-52 text-black font-bold">
          <router-link to="/registration" class="nav-link"
            >Registrasi</router-link
          >
        </div>

        <div class="mx-5 mt-5 text-black font-bold">
          <router-link to="/regisdoc" class="nav-link"
            >Registrasi Doc</router-link
          >
        </div>
      </div>
      <div
        class="text-black mb-10 px-5 py-3 mt-0 font-bold border border-gray-400"
      >
        <router-link to="/login" class="nav-link">Sign Out</router-link>
      </div>
    </div>

    <div class="flex w-5/6 p-5  flex-grow h-full">
      <slot></slot>
    </div>
  </div>
</template>
