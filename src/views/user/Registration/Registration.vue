<template>
  <main-layout>
    <div class="p-5 w-full">
      <div class="text-2xl text-black text-center font-bold">
        Form Pendaftaran Calon Dosen
      </div>
      <div class="flex flex-col justify-center mt-5">
        <div>
          <label>Nama Lengkap Tanpa Gelar</label
          ><t-input v-model="form.username" />
        </div>

        <div><label>Email</label><t-input v-model="form.email" /></div>

        <div><label>Password</label><t-input v-model="form.password" /></div>

        <div>
          <label>Tempat Lahir</label><t-input v-model="form.tempatlahir" />
        </div>

        <label>Tanggal Lahir</label>
        <t-datepicker v-model="form.tgl_lahir" />

        <div><label>NO KTP</label><t-input v-model="form.ktp" /></div>

        <div class="flex flex-col">
          <label>Pendidikan Terakhir</label>
          <t-select
            placeholder="Select an option"
            :options="['Option A', 'Option B', 'Option C']"
            variant="demo"
          >
          </t-select>
        </div>

        <div>
          <label>IPK S2</label>
          <t-input v-model="form.ipk" />
        </div>

        <label>Jurusan Yang Di Pilih</label>
        <t-select
          placeholder="Select an option"
          :options="['Option A', 'Option B', 'Option C']"
          variant="demo"
        >
        </t-select>

        <div class="mt-5">
          <router-link to="/RegisDoc" class="nav-link"
            ><t-button>Submit</t-button></router-link
          >
        </div>
      </div>
    </div>
  </main-layout>
</template>

<script>
import MainLayout from "../../../components/MainLayout.vue";
export default {
  components: { MainLayout },
  name: "Registration",
  data() {
    return {
      form: {}
    };
  }
};
</script>
