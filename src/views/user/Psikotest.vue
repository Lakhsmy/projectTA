<template>
  <dashboard>
    <div class="p-5 bg-white rounded-xl w-full">
      <div class="text-2xl text-black mt-2 mx-5 font-bold text-center">
        SOAL PSIKOTEST
      </div>
      <hr class="mt-5 border-black" />
      <div v-for="(value, key) in questionList" :key="key">
        <div class="mt-5">
          {{ value.question }}
        </div>
        <div class="flex flex-row ">
          <div class="mx-5">
            <t-radio name="options" :value="value.a" />
            {{ value.a }}
          </div>
          <div class="mx-28">
            <t-radio name="options" :value="value.b" />
            {{ value.b }}
          </div>
        </div>
        <div class="flex flex-row">
          <div class="mx-5">
            <t-radio name="options" :value="value.c" />
            {{ value.c }}
          </div>
          <div class="mx-28">
            <t-radio name="options" :value="value.d" />
            {{ value.d }}
          </div>
        </div>
      </div>
      <t-button class="mt-10">Submit</t-button>
    </div>
  </dashboard>
</template>

<script>
import Dashboard from "@/components/Dashboard";

export default {
  name: "Psikotest",
  components: { Dashboard },
  data() {
    return {
      questionList: [
        {
          question:
            "1. Apabila surabaya merupakan kura-kura, semarang merupakan sapi, serta jakarta merupakan kuda, maka makassar merupakan….",
          a: "Macan",
          b: "Angsa",
          c: "Merak",
          d: "Kenari"
        },
        {
          question:
            "2. Seluruh guru merupakan pegawai negeri sebagian dari guru merupakan olahragawan",
          a: "Sebagian dari olahragawan merupakan guru",
          b: "Sebagian dari pegawai negeri merupakan guru",
          c: "Sebagian dari olahragawan merupakan pegawai negeri",
          d: "Seluruh olahragawan merupakan guru"
        },
        {
          question:
            "3. 2 buah lustrum ditambah 3 windu dikurangi 2 dekade adalah…",
          a: "1 dekade",
          b: "14 tahun",
          c: "1 windu",
          d: "2 lustrum"
        },
        {
          question:
            "4. Sebuah kubus yang memiliki panjang rusuk 6 cm akan mempunyai luas sisi sepanjang..cm",
          a: "260 cm",
          b: "126 cm",
          c: "616 cm",
          d: "216 cm"
        },
        {
          question:
            "5. Jika diketahui bak mandi memiliki bentuk kubus dengan ukuran rusuk yaitu panjang kali lebar kali tinggi adalah 1 meter * 1 meter* 0,5 meter, maka berapakah volume air yang bisa ditampung dalam bak tersebut?",
          a: "250 liter",
          b: "150 liter",
          c: "5000 liter",
          d: "500 liter"
        },
        {
          question: "6. 25–30–35–40–45,….",
          a: "55",
          b: "40",
          c: "60",
          d: "50"
        },
        {
          question: "7. Relatif = ...",
          a: "Biasa",
          b: "Ukuran",
          c: "Nisbi",
          d: "Statis"
        },
        {
          question: "8. Renovasi = ...",
          a: "Pemagaran",
          b: "Peningkatan",
          c: "Pemugaran",
          d: "Pembongkaran"
        },
        {
          question: "9. Pakar >< ...",
          a: "Awam",
          b: "Spesialis",
          c: "Cendekia",
          d: "Acuh"
        },
        {
          question: "10. Lugas >< ...",
          a: "Mengada-ada",
          b: "Apatis",
          c: "Keras",
          d: "Berlebihan"
        }
      ]
    };
  }
};
</script>
