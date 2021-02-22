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
        <!-- HDC -->
        <div class="mx-5 mt-5 text-black font-bold">
          <router-link to="/data-hdc" class="nav-link">Data HDC</router-link>
        </div>
        <div class="mx-5 mt-5 text-black font-bold">
          <router-link to="/nilai-psikotest" class="nav-link"
            >Nilai Psikotest</router-link
          >
        </div>
        <div class="mx-5 mt-5 text-black font-bold">
          <router-link to="/pengumuman" class="nav-link"
            >Pengumuman</router-link
          >
        </div>
      </div>
      <div
        class="text-black mb-10 px-5 py-3 mt-0 font-bold border border-gray-400"
      >
        <!-- <img src="https://img.icons8.com/material-two-tone/24/000000/process.png"/> -->
        <router-link to="/login" class="nav-link">Sign Out</router-link>
      </div>
    </div>

    <div class="flex w-5/6 p-5  flex-grow h-full">
      <slot></slot>
    </div>
  </div>
</template>
