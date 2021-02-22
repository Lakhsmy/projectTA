<template>
  <main-layout>
    <div class="p-5 w-full">
      <div class="text-2xl text-black text-center font-bold">
        Form Dokumen Pendaftaran Calon Dosen
      </div>
      <div class="flex flex-col justify-center mt-5">
        <div><label>Surat Lamaran</label><t-input v-model="form.surat" /></div>

        <div>
          <label>Riwayat Hidup / CV</label><t-input v-model="form.cv" />
        </div>

        <div>
          <label>Legalisir Ijasah</label><t-input v-model="form.ijasah" />
        </div>

        <div>
          <label>Transkip Nilai</label><t-input v-model="form.transkip" />
        </div>

        <div><label>Foto 4x6</label><t-input v-model="form.foto" /></div>

        <div>
          <label>SK. Penyetaraan Ijasah Luar Negeri</label
          ><t-input v-model="form.penyetaraan" />
        </div>

        <div>
          <label>SK. Jenjang jabatan Akademik</label
          ><t-input v-model="form.jenjang" />
        </div>

        <div>
          <label>Sertifikasi Dosen</label><t-input v-model="form.sertifikasi" />
        </div>

        <div><label>FC KTP</label><t-input v-model="form.ktp" /></div>

        <div><label>FC NPWP</label><t-input v-model="form.npwp" /></div>

        <div class="mt-5">
          <t-button>Submit</t-button>
        </div>
      </div>
    </div>
  </main-layout>
</template>

<script>
import MainLayout from "../../../components/MainLayout.vue";
export default {
  components: { MainLayout },
  name: "RegisDoc",
  data() {
    return {
      form: {}
    };
  }
};
</script>
