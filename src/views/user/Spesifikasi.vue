<template>
  <dashboard>
    <div class="px-5 pt-5 pb-16 w-full bg-white rounded-xl">
      <div class="text-2xl text-black mt-5 mx-5 font-bold text-center">
        Kualifikasi Pendaftaran
      </div>
      <hr class="mt-5 border-black" />
      <div class="text-black leading-normal mt-5 mx-10">
        <div class="text-xl text-black mt-5 font-bold text-left">
          Ketentuan Umum
        </div>
        <ol class="list-decimal mt-5">
          <li>
            Pria/Wanita, usia max 40 th
          </li>
          <li>
            Memiliki gelar Doktor (S3) untuk bidang yang sesuai dengan Program
            Studi di Lingkungan Universitas Pembangunan Jaya, yaitu
            Arsitektur/Teknil Sipil/Sistem Informasi/Informatika/Desain
            Komunikasi Visual/Desain Produk/Akuntansi/Manajemen/Ilmu
            Komunikasi/Psikologi
          </li>
          <li>
            Lulusan dalam/luar negeri
          </li>
          <li>
            Memiliki pengalaman minimal 3 tahun mengajar pada Pendidikan Tinggi
          </li>
          <li>
            Mampu Bekerja sama dalam tim
          </li>
          <li>
            Menjunjung tinggi nilai integritas dan institusi secara martabat
          </li>
          <li>
            Bersedia untuk mematuhi seluruh peraturan yang berlaku di UPJ maupun
            Yayasan Pendidikan Jaya
          </li>
          <li>
            Memiliki publikasi nasioanl/international dan memiliki h-index
          </li>
          <li>
            Memiliki NIDN dan JAD minimal Asistem Ahli
          </li>
          <li>
            Memiliki kemampuan berbahasa inggris yang baik (TOEFL 570/IELTS
            7/TOEIC 550) dibuktikan dengan hasil test yang masih berlaku
          </li>
          <li>
            Memiliki kemampuan komunikasi interpersonal yang baik
          </li>
          <li>
            Memiliki kemampuan kepemimpinan, kompetensi akademik, manajerial dan
            entrepreneurial
          </li>
        </ol>
        <!--        <p class="mt-5">1. Pria/Wanita, usia max 40 th</p>-->
        <!--        <p class="mt-2">2. Pendidikan S2/S3, bidang ilmu harus linier</p>-->
        <!--        <p class="mt-2">3. Lulusan dalam/luar negeri</p>-->
        <!--        <p class="mt-2">-->
        <!--          4. Diutamakan yang memiliki pengalaman mengajar minimal 2 th-->
        <!--        </p>-->
        <!--        <p class="mt-2">5. Mampu bekerja sama dalam tim</p>-->
        <!--        <p class="mt-2">6. Berintegritas dan bertanggung jawab</p>-->
        <!--        <p class="mt-2">-->
        <!--          7. Domisili di sekitar Bintaro Jaya menjadi nilai tambah-->
        <!--        </p>-->
        <div class="text-xl text-black mt-5 mb-5 font-bold text-left">
          Ketentuan Khusus
        </div>
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
  </dashboard>
</template>

<script>
import Dashboard from "@/components/Dashboard";
export default {
  name: "Spesifikasi",
  components: { Dashboard }
};
</script>
