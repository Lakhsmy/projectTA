<template>
  <div class=" w-full background-login">
    <!-- <img src="" /> -->
    <section class="py-12">
      <div class="container mt-10 px-4 mx-auto">
        <div
          class="flex bg-white rounded-lg max-w-md mx-auto flex-col text-center"
        >
          <span class="mt-5 text-lg font-bold">REKRUTMENT DOSEN</span>
          <a class="mx-48 mt-3"
            ><img
              class="h-16"
              src="https://irenkartika.files.wordpress.com/2014/12/logo-bulat-upj.png"
              alt=""
              width="auto"
          /></a>
          <div class=" mb-8 p-8 ">
            <span class="text-sm text-blueGray-400">Form Pendaftaran</span>
            <div
              class="flex flex-col justify-start mb-4 px-4 bg-blueGray-50 rounded"
            >
              <label class="text-left">Nama Lengkap Tanpa Gelar</label>
              <div class="flex flex-row">
                <t-input name="my-input" />
              </div>
            </div>
            <div
              class="flex flex-col justify-start mb-4 px-4 bg-blueGray-50 rounded"
            >
              <label class="text-left">Email</label>
              <div class="flex flex-row">
                <t-input name="my-input" />
              </div>
            </div>
            <div
              class="flex flex-col justify-start mb-4 px-4 bg-blueGray-50 rounded"
            >
              <label class="text-left">Password</label>
              <div class="flex flex-row">
                <t-input name="my-input" />
              </div>
            </div>
            <div
              class="flex flex-col justify-start mb-4 px-4 bg-blueGray-50 rounded"
            >
              <label class="text-left">Tempat Lahir</label>
              <div class="flex flex-row">
                <t-input name="my-input" />
              </div>
            </div>
            <div
              class="flex flex-col justify-start mb-4 px-4 bg-blueGray-50 rounded"
            >
              <label class="text-left">Tanggal Lahir</label>
              <div class="flex flex-row">
                <t-input name="my-input" />
              </div>
            </div>
            <div
              class="flex flex-col justify-start mb-4 px-4 bg-blueGray-50 rounded"
            >
              <label class="text-left">NO KTP</label>
              <div class="flex flex-row">
                <t-input name="my-input" />
              </div>
            </div>
            <div
              class="flex flex-col justify-start mb-4 px-4 bg-blueGray-50 rounded"
            >
              <label class="text-left">Pendidikan Terakhir</label>
              <div class="flex flex-row">
                <t-select :options="pendidikanTerakhirList" name="my-input" />
              </div>
            </div>
            <div
              class="flex flex-col justify-start mb-4 px-4 bg-blueGray-50 rounded"
            >
              <label class="text-left">IPK</label>
              <div class="flex flex-row">
                <t-input name="my-input" />
              </div>
            </div>
            <div
              class="flex flex-col justify-start mb-4 px-4 bg-blueGray-50 rounded"
            >
              <label class="text-left">Jurusan Terpilih</label>
              <div class="flex flex-row">
                <t-select :options="jurusanList" name="my-input" />
              </div>
            </div>
            <button
              class="block w-full p-4 text-center text-xs text-white font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded"
              @click="onRegister"
            >
              Daftar
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      showPassword: false,
      pendidikanTerakhirList: ["S2", "S3"],
      jurusanList: ["Tata Boga", "Ciputat - Bintaro"]
    };
  },
  methods: {
    onShowPassword: function() {},
    onRegister: function() {}
  }
};
</script>
<style>
.background-login {
  background-image: url("https://th.bing.com/th/id/R7eacd3594a4ff3ebd5326029bccc9ba1?rik=Z%2fNH3Ps6j%2f9DFA&riu=http%3a%2f%2fupj.ac.id%2fupload%2fmodule%2fgallery3%2fgallery68.jpg&ehk=yPhVP1qMo3pAWbmzb6n4hwFBJ9wIFopCN%2bQ9lM6QnH4%3d&risl=&pid=ImgRaw");
  background-position: center center;
}
</style>
