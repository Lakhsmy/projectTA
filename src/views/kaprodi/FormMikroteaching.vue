<template>
  <dashboard>
    <div class="p-5 w-full">
      <div class="text-2xl text-black mt-2 mx-5 font-bold text-center">
        FORM PENILAIAN MIKROTEACHING TAHAP 1
      </div>
      <p class="flex justify-center mt-5">
        Mohon untuk memberi jawaban dengan memilih salah satu opsi jawaban yang
        tersedia
      </p>
      <!-- <hr class="mt-10 border-black" /> -->
      <div class="flex flex-row-reverse mx-5 mt-5">
        <p class="mx-14 mt-5">6</p>
        <p class="mx-8 mt-5">5</p>
        <p class="mx-14 mt-5">4</p>
        <p class="mx-6 mt-5">3</p>
        <p class="mx-14 mt-5">2</p>
        <p class="mx-10 mt-5">1</p>
      </div>
      <div class="flek flex-col mt-0 flex-grow border border-black">
        <div v-for="(value, key) in questionList" :key="key">
          <div class="flex flex-row">
            <div class="w-2/5">
              <hr class="mt-3" />
              {{ value.question }}
              {{ value.pertanyaan }}
            </div>
            <div class="flex flex-row justify-items-center">
              <div class="mx-14 mt-10">
                <t-radio name="options" :value="value.a" />
                {{ value.a }}
              </div>
              <div class="mx-10 mt-10">
                <t-radio name="options" :value="value.b" />
                {{ value.b }}
              </div>
              <div class="mx-10 mt-10">
                <t-radio name="options" :value="value.c" />
                {{ value.c }}
              </div>
              <div class="mx-10 mt-10">
                <t-radio name="options" :value="value.d" />
                {{ value.d }}
              </div>
              <div class="mx-10 mt-10">
                <t-radio name="options" :value="value.e" />
                {{ value.e }}
              </div>
              <div class="mx-10 mt-10">
                <t-radio name="options" :value="value.f" />
                {{ value.f }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-black mb-10 px-5 py-3 mt-5 border border-black">
        <!-- <img src="https://img.icons8.com/material-two-tone/24/000000/process.png"/> -->
        <p>
          7. Beberapa catatan hasil wawancara yang perlu menjadi
          perhatian/pertimbangan. Pewawancara dapat menambahkan penilaian seusai
          dengan hasil microteaching, kemampuan mengajar dan mentransfer ilmu
          kepada peserta kelas.
        </p>
        <t-input class="mt-3 border border-gray-400" value="" name="my-input" />
      </div>
      <t-button>Submit</t-button>
    </div>
  </dashboard>
</template>

<script>
import Dashboard from "../../components/Dashboard.vue";

export default {
  name: "FormMikroteaching",
  components: { Dashboard },
  data() {
    return {
      questionList: [
        {
          question: "1. Pemilihan Media Pembelajaran.",
          pertanyaan:
            "Rubrik (1-2) tidak menggunakan media pembelaran selain ppt (3-4_ menggunakan selain ppt namun terbatas (5-6) sangat kreatif dalam menggunakan media pembelajaran.",
          a: "",
          b: "",
          c: "",
          d: "",
          e: "",
          f: ""
        },
        {
          question: "2. Teknis Penyampaian Materi.",
          pertanyaan:
            "Rubrik (1-2) Kacau, tidak fokus, tidak runut (3-4) Terarah, relevan, jelas dan lancar (5-6) Sangat lancar, terarah, sangat mudah dimengerti.",
          a: "",
          b: "",
          c: "",
          d: "",
          e: "",
          f: ""
        },
        {
          question: "3. Penggunaan Bahasa.",
          pertanyaan:
            "Rubrik (1-2) Bahasa agak kurang dimengerti, berulang-ulang (3-4) Bhs cukup dimengerti, runut dan mudah dipahami (5-6) Bahasa sangat baik, sangat mudah dipahami.",
          a: "",
          b: "",
          c: "",
          d: "",
          e: "",
          f: ""
        },
        {
          question: "4. Responsi dalam Tanya Jawab.",
          pertanyaan:
            "Rubrik (1-2) Lambat, tidak menangkap pertayaan dengan baik, jawaban kurang sesuai (3-4) Cukup responsif, memahami pertanyaan dan jawaban sesuai (5-6) Cepat merespon, jawaban sangat sesuai dan memuaskan.",
          a: "",
          b: "",
          c: "",
          d: "",
          e: "",
          f: ""
        },
        {
          question: "5. Interaksi dengan Peserta Kelas.",
          pertanyaan:
            "Rubrik (1-2) Tidak ada eye contact, sibuk dengan diri sendiri, baca ppt (3-4) ada eye contact, berinteraksi dengan cukup baik namun tidak mendorong peserta kelas untuk aktif (5-6) Berinteraksi dengan sangat baik, mendorong peserta untuk menjadi aktif.",
          a: "",
          b: "",
          c: "",
          d: "",
          e: "",
          f: ""
        },
        {
          question: "6. Penguasaan Materi / Pengetahuan yang relevan.",
          pertanyaan:
            "Rubrik (1-2) terbatas pada materi sesuai dengan textbook (3-4) Penguasaan materi cukup baik disertai dengan contoh riil (5-6) Penguasaan materi sangat baik, disertai dengan contoh riil dan hubungannya dengan pengetahuan yang relevan.",
          a: "",
          b: "",
          c: "",
          d: "",
          e: "",
          f: ""
        }
      ]
    };
  }
};
</script>
