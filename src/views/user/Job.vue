<template>
  <main-layout>
    <div class="flex w-5/6 p-5  flex-grow h-full">
      <div class="p-5 w-full">
        <div class="text-2xl text-black mt-5 mx-5 font-bold text-center">
          KETENTUAN REKRUTMENT DAN SELEKSI
        </div>
        <hr class="mt-5 border-black" />

        <div class="text-black mt-14 mx-10">
          <t-table
            :headers="['No', 'Jurusan', 'Kualifikasi']"
            :data="[
              [
                '1.',
                'Dosen Program Studi Psikologi (D-Psi)',
                'Usia max 45th, Latar Belakang Pendidikan S2/S3 Psikologi, Diutamakan memiliki kompetensi di bidang psikometri/konstruksi alat ukur/asesmen, terutama dibidang industri dan organisasi.'
              ],
              [
                '2.',
                'Dosen Program Studi Informatika (S.Kom)',
                'Usia max 40th, Memiliki keahlian di bidang kecerdasan buatan, jaringan dan mikrokontroller atau robotika.'
              ]
            ]"
          >
          </t-table>
        </div>
      </div>
    </div>
  </main-layout>
</template>

<script>
import MainLayout from "../../components/MainLayout.vue";
export default {
  components: { MainLayout },
  name: "Job"
};
</script>
