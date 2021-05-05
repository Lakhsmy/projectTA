<template>
  <div class=" w-full background-login">
    <!-- <img src="" /> -->
    <section class="py-12">
      <div class="container mt-10 px-4 mx-auto">
        <div
          class="flex bg-white rounded-lg max-w-md mx-auto flex-col text-center"
        >
          <h1 class="mt-5 text-lg font-bold">REKRUTMEN DOSEN</h1>
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
                <t-input
                  v-model="form.fullName"
                  data-test="fullName"
                  name="my-input"
                />
              </div>
            </div>
            <div
              class="flex flex-col justify-start mb-4 px-4 bg-blueGray-50 rounded"
            >
              <label class="text-left">Email</label>
              <div class="flex flex-row">
                <t-input
                  v-model="form.email"
                  data-test="email"
                  name="my-input"
                />
              </div>
            </div>
            <div
              class="flex flex-col justify-start mb-4 px-4 bg-blueGray-50 rounded"
            >
              <label class="text-left">Password</label>
              <div class="flex flex-row">
                <t-input
                  v-model="form.password"
                  data-test="password"
                  name="my-input"
                />
              </div>
            </div>
            <div
              class="flex flex-col justify-start mb-4 px-4 bg-blueGray-50 rounded"
            >
              <label class="text-left">Tempat Lahir</label>
              <div class="flex flex-row">
                <t-input
                  v-model="form.birthPlace"
                  data-test="birthPlace"
                  name="my-input"
                />
              </div>
            </div>
            <div
              class="flex flex-col justify-start mb-4 px-4 bg-blueGray-50 rounded"
            >
              <label class="text-left">Tanggal Lahir</label>
              <div class="flex flex-row">
                <t-datepicker
                  v-model="form.birthDate"
                  data-test="birthDate"
                  name="my-input"
                />
              </div>
            </div>
            <div
              class="flex flex-col justify-start mb-4 px-4 bg-blueGray-50 rounded"
            >
              <label class="text-left">NO KTP</label>
              <div class="flex flex-row">
                <t-input v-model="form.ktp" data-test="ktp" name="my-input" />
              </div>
            </div>
            <div
              class="flex flex-col justify-start mb-4 px-4 bg-blueGray-50 rounded"
            >
              <label class="text-left">Pendidikan Terakhir</label>
              <div class="flex flex-row">
                <t-select
                  v-model="form.latestEducation"
                  :options="pendidikanTerakhirList"
                  data-test="latestEducation"
                  name="my-input"
                />
              </div>
            </div>
            <div
              class="flex flex-col justify-start mb-4 px-4 bg-blueGray-50 rounded"
            >
              <label class="text-left">IPK</label>
              <div class="flex flex-row">
                <t-input
                  v-model.number="form.ipk"
                  data-test="ipk"
                  name="my-input"
                />
              </div>
            </div>
            <div
              class="flex flex-col justify-start mb-4 px-4 bg-blueGray-50 rounded"
            >
              <label class="text-left">Jurusan Terpilih</label>
              <div class="flex flex-row">
                <t-select
                  v-model="form.major"
                  :options="jurusanList"
                  data-test="major"
                  name="my-input"
                />
              </div>
            </div>
            <!-- <div
              class="flex flex-col justify-start mb-4 px-4 bg-blueGray-50 rounded"
            >
              <label class="text-left"
                >Link to drive where your CV file is stored</label
              >
              <div class="flex flex-row">
                <t-input v-model="form.cv" data-test="cv" name="my-input" />
              </div>
            </div> -->
            <form
              action="/action_page.php"
              class="flex flex-col justify-start mb-4 px-4 bg-blueGray-50 rounded"
            >
              <label class="text-left">Unggah CV</label>
              <input
                type="file"
                id="cv"
                data-test="cv"
                ref="cv"
                @change="selectFile"
                name="my-input"
              />
            </form>
            <button
              class="block w-full p-4 text-center text-xs text-white font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded"
              data-test="registerButton"
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
import { mapActions, mapState } from "vuex";

export default {
  name: "Register",
  data() {
    return {
      form: {
        username: "",
        fullName: "",
        email: "",
        birthDate: "",
        birthPlace: "",
        ktp: "",
        latestEducation: "",
        ipk: 0,
        major: "",
        cv: "",
        password: ""
      },
      selectedFiles: "",
      showPassword: false,
      pendidikanTerakhirList: ["S2", "S3"],
      jurusanList: ["Tata Boga", "Ciputat - Bintaro"]
    };
  },
  computed: {
    ...mapState("user", ["cvData"])
  },
  methods: {
    ...mapActions("auth", ["registerApplicant"]),
    ...mapActions("user", ["uploadCV"]),
    onShowPassword: function() {},
    selectFile() {
      this.selectedFiles = this.$refs.cv.files[0];
    },
    onRegister: async function() {
      try {
        const formData = new FormData();
        formData.append("file", this.selectedFiles);
        await this.uploadCV({ payload: formData });

        this.form.cv = `${this.cvData.destination}/${this.filename}`;
        await this.registerApplicant({ payload: this.form });
        await this.$router.push("/login");
      } catch {
        alert("Failed");
      }
    }
    // onUploadCV(){

    // }
  }
};
</script>
<style>
.background-login {
  background-image: url("https://th.bing.com/th/id/R7eacd3594a4ff3ebd5326029bccc9ba1?rik=Z%2fNH3Ps6j%2f9DFA&riu=http%3a%2f%2fupj.ac.id%2fupload%2fmodule%2fgallery3%2fgallery68.jpg&ehk=yPhVP1qMo3pAWbmzb6n4hwFBJ9wIFopCN%2bQ9lM6QnH4%3d&risl=&pid=ImgRaw");
  background-position: center center;
}
</style>
