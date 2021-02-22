<template>
  <layout-kaprodi>
    <div class="p-5 w-full">
      <div class="text-2xl text-black mt-2 mx-5 font-bold text-center">
        FORM PENILAIAN INTERVIEW TAHAP 1
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
          9. Beberapa catatan hasil wawancara yang perlu menjadi
          perhatian/pertimbangan. Pewawancara dapat menambahkan penilaian seusai
          dengan hasil wawancara yang terkait dengan etika/komitmen/
          kemampuan/kualitas/kompetensi dan lainnya:
        </p>
        <t-input class="mt-3 border border-gray-400" value="" name="my-input" />
      </div>
      <t-button>Submit</t-button>
    </div>
  </layout-kaprodi>
</template>

<script>
import LayoutKaprodi from "../../components/LayoutKaprodi.vue";

export default {
  name: "FormInterview",
  components: { LayoutKaprodi },
  data() {
    return {
      questionList: [
        {
          question:
            "1. KOMUNIKASI : Kemampuan untuk berkomunikasi dan menjelaskan suatu hal sehingga dimengerti orang lain.",
          pertanyaan:
            "RUBRIK: (1-2) Tidak terarah, tidak fokus, tidak relevan, membingungkan (3-4) Terarah, fokus, relevan, jelas dan lancar (5-6) terarah, sangat relevan, sangat lancar dan jelas dan mudah dimengerti",
          a: "",
          b: "",
          c: "",
          d: "",
          e: "",
          f: ""
        },
        {
          question:
            "2. PENGETAHUAN : Sejauh mana pengetahuan tentang bidang kerja yang akan ditekuni.",
          pertanyaan:
            "RUBRIK (1-2) Minim, hanya tahu secara garis besar (3-4) Tahu banyak, kenal seluruh aktivitasnya (5-6) mengetahui sangat mendalam seluruh aktivitasnya.",
          a: "",
          b: "",
          c: "",
          d: "",
          e: "",
          f: ""
        },
        {
          question:
            "3. PENGALAMAN : Kompetensi yang dimiliki sesuai dengan pengalaman kerja sebelumnya.",
          pertanyaan:
            "RUBRIK: (1-2) Kurang kompeten (3-4) Kompeten (5-6) Sangat Kompeten.",
          a: "",
          b: "",
          c: "",
          d: "",
          e: "",
          f: ""
        },
        {
          question:
            "4. KESIAPAN DIRI : Kemudahan untuk beradaptasi dan mengambil langkah terhadap situasi baru.",
          pertanyaan:
            "RUBRIK: (1-2) Rekasi lambat, terkesan tidak mengerti (3-4) Cepat memahami masalah, cepat bereaksi (5-6) Sangat mudah memahami masalah, cepat dan antisipatif.",
          a: "",
          b: "",
          c: "",
          d: "",
          e: "",
          f: ""
        },
        {
          question:
            "5. KEMAMPUAN ANALISA : Kemampuan untuk mengidentifikasi masalah dan kemungkinan penyebabnya serta kemampuan melihat data dan fakta untuk mengambil tindakan selanjutnya.",
          pertanyaan:
            "RUBRIK: (1-2) Sangat Dangkal, ragu dan tidak meyakinkan (3-4) Runut, cukup mendalam namun tidak antisipatif dalam masalah lain (5-6) Sangat taktis, mendalam dan antisipatif dalam masalah lain.",
          a: "",
          b: "",
          c: "",
          d: "",
          e: "",
          f: ""
        },
        {
          question:
            "6. ANTUSIASME/ INISIATIF : Minat untuk bergabung dan inisiatif yang ditampilkan saat wawancara.",
          pertanyaan:
            "RUBRIK (1-2) Tampak kurang berminat, menjawab dengan pasif, menunggu (3-4) Menunjukkan minat kuat, menjawab lengkap dan cukup aktif mengajukan pertanyaan (5-6) Sangat bersemangat, ajukan pertanyaan yang relevan, selfstarter.",
          a: "",
          b: "",
          c: "",
          d: "",
          e: "",
          f: ""
        },
        {
          question:
            "7. KARAKTER/ PENAMPILAN : Sifat/ karakter dan penampilan yang ditampilkan saat wawancara.",
          pertanyaan:
            "RUBRIK (1-2) Dingin, tampak tidak bersahabat, kusut, tidak merawat diri (3-4) Ramah menyenangkan, hangat, penampilan rapi dan bersih (5-6) Sangat ramah, impresif, sangat rapi, memiliki kepribadian yang menarik.",
          a: "",
          b: "",
          c: "",
          d: "",
          e: "",
          f: ""
        },
        {
          question:
            "8. KEPEMIMPINAN : Kemampuan untuk mengorganisir orang lain.",
          pertanyaan:
            "RUBRIK: (1-2) Tidak ada pengalaman kepemimpinan (3-4) Menunjukkan pengalaman yang cukup berhasil dalam kepemimpinan (5-6) Menunjukkan pengalaman sangat berhasil dalam kepemimpinan.",
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
