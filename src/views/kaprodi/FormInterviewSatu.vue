<template>
  <dashboard>
    <t-card class="p-5 w-full">
      <div class="text-2xl text-black mt-2 mx-5 font-bold text-center">
        FORM PENILAIAN INTERVIEW TAHAP 1
      </div>

      <section
        v-if="
          getUserQuestionAnswer &&
            getUserQuestionAnswer.questionSet &&
            getUserQuestionAnswer.questionSet.questionSet.length > 0
        "
      >
        <form @submit.prevent="submitQuestion">
          <p class="flex justify-center mt-5">
            Mohon untuk memberi jawaban dengan memilih salah satu opsi jawaban
            yang tersedia
          </p>
          <div
            class="flex flex-col mt-0 flex-grow border border-black"
            v-if="
              getUserQuestionAnswer &&
                getUserQuestionAnswer.questionSet &&
                getUserQuestionAnswer.questionSet.questionSet.length > 0
            "
          >
            <div class="flex flex-row">
              <t-table
                :headers="['Question', '1', '2', '3', '4', '5', '6']"
                :data="getUserQuestionAnswer.questionSet.questionSet"
                :responsive="true"
              >
                <template
                  slot="tbody"
                  slot-scope="{
                    tbodyClass,
                    trClass,
                    tdClass,
                    renderResponsive,
                    data
                  }"
                >
                  <template v-if="renderResponsive">
                    <tbody
                      v-for="(row, rowIndex) in data"
                      :key="rowIndex"
                      :class="[
                        tbodyClass,
                        rowIndex % 2 === 0 ? 'bg-gray-100' : ''
                      ]"
                    >
                      <tr :class="trClass">
                        <th
                          class="text-sm font-semibold text-gray-600 uppercase"
                        >
                          Name
                        </th>
                        <td :class="[tdClass, 'td-overflow']">
                          {{ row.question }}
                        </td>
                      </tr>
                      <tr :class="trClass">
                        <!-- <div class="flex"> -->
                        <th
                          class="text-sm font-semibold text-gray-600 uppercase"
                        >
                          Email
                        </th>
                        <td :class="[tdClass, 'td-overflow']">
                          <!-- <a
                          :href="`mailto: ${row.candidate.email}`"
                          class="text-gray-600 hover:underline break-all"
                          >{{ row }}</a
                        > -->
                        </td>
                      </tr>
                      <tr :class="trClass">
                        <th
                          class="text-sm font-semibold text-gray-600 uppercase"
                        >
                          Score
                        </th>
                        <td :class="[tdClass]">
                          {{ row }}
                        </td>
                      </tr>
                    </tbody>
                  </template>
                </template>
                <template
                  slot="row"
                  slot-scope="{ trClass, tdClass, rowIndex, row }"
                >
                  <tr
                    :class="[trClass, rowIndex % 2 === 0 ? 'bg-gray-100' : '']"
                  >
                    <td :class="[tdClass]" width="30%">
                      <p class=" mb-2">
                        {{ row.question }}
                      </p>
                      <p>
                        {{ row.description }}
                      </p>
                    </td>
                    <td
                      :class="tdClass"
                      v-for="(answerValue, answerIndex) in row.answerOptions"
                      :key="answerIndex"
                    >
                      <input
                        type="radio"
                        :name="`options[${row._id}]`"
                        :value="answerValue._id"
                        @change="onChangeAnswer($event, row._id, rowIndex)"
                        :checked="checkedValue(row._id, answerValue._id)"
                      />
                    </td>
                  </tr>
                </template>
              </t-table>
            </div>
          </div>
          <div class="text-black mb-10 px-5 py-3 mt-5 border border-black">
            <!-- <img src="https://img.icons8.com/material-two-tone/24/000000/process.png"/> -->
            <p>
              Beberapa catatan hasil wawancara yang perlu menjadi
              perhatian/pertimbangan. Pewawancara dapat menambahkan penilaian
              seusai dengan hasil wawancara yang terkait dengan etika/komitmen/
              kemampuan/kualitas/kompetensi dan lainnya:
            </p>
            <t-input
              class="mt-3 border border-gray-400"
              value=""
              name="my-input"
            />
          </div>
          <t-button type="submit">Submit</t-button>
        </form>
      </section>
      <div v-else>
        <t-button v-if="getUserQuestionAnswer === null" @click="takeInterview">
          Take Interview
        </t-button>
      </div>
    </t-card>
  </dashboard>
</template>

<script>
import Dashboard from "../../components/Dashboard.vue";
import { mapActions, mapGetters } from "vuex";
import {
  CREATE_CURRENT_USER_QUESTION_ANSWER,
  CALCULATE_USER_QUESTION_ANSWER,
  FETCH_CURRENT_USER_QUESTION_ANSWER,
  SUBMIT_CURRENT_USER_QUESTION_ANSWER
} from "@/store/module/user-question-answer.module";
export default {
  name: "FormInterview",
  components: { Dashboard },
  data() {
    return {
      // questionList: [
      //   {
      //     question:
      //       "1. KOMUNIKASI : Kemampuan untuk berkomunikasi dan menjelaskan suatu hal sehingga dimengerti orang lain.",
      //     pertanyaan:
      //       "RUBRIK: (1-2) Tidak terarah, tidak fokus, tidak relevan, membingungkan (3-4) Terarah, fokus, relevan, jelas dan lancar (5-6) terarah, sangat relevan, sangat lancar dan jelas dan mudah dimengerti",
      //     a: "",
      //     b: "",
      //     c: "",
      //     d: "",
      //     e: "",
      //     f: ""
      //   },
      //   {
      //     question:
      //       "2. PENGETAHUAN : Sejauh mana pengetahuan tentang bidang kerja yang akan ditekuni.",
      //     pertanyaan:
      //       "RUBRIK (1-2) Minim, hanya tahu secara garis besar (3-4) Tahu banyak, kenal seluruh aktivitasnya (5-6) mengetahui sangat mendalam seluruh aktivitasnya.",
      //     a: "",
      //     b: "",
      //     c: "",
      //     d: "",
      //     e: "",
      //     f: ""
      //   },
      //   {
      //     question:
      //       "3. PENGALAMAN : Kompetensi yang dimiliki sesuai dengan pengalaman kerja sebelumnya.",
      //     pertanyaan:
      //       "RUBRIK: (1-2) Kurang kompeten (3-4) Kompeten (5-6) Sangat Kompeten.",
      //     a: "",
      //     b: "",
      //     c: "",
      //     d: "",
      //     e: "",
      //     f: ""
      //   },
      //   {
      //     question:
      //       "4. KESIAPAN DIRI : Kemudahan untuk beradaptasi dan mengambil langkah terhadap situasi baru.",
      //     pertanyaan:
      //       "RUBRIK: (1-2) Rekasi lambat, terkesan tidak mengerti (3-4) Cepat memahami masalah, cepat bereaksi (5-6) Sangat mudah memahami masalah, cepat dan antisipatif.",
      //     a: "",
      //     b: "",
      //     c: "",
      //     d: "",
      //     e: "",
      //     f: ""
      //   },
      //   {
      //     question:
      //       "5. KEMAMPUAN ANALISA : Kemampuan untuk mengidentifikasi masalah dan kemungkinan penyebabnya serta kemampuan melihat data dan fakta untuk mengambil tindakan selanjutnya.",
      //     pertanyaan:
      //       "RUBRIK: (1-2) Sangat Dangkal, ragu dan tidak meyakinkan (3-4) Runut, cukup mendalam namun tidak antisipatif dalam masalah lain (5-6) Sangat taktis, mendalam dan antisipatif dalam masalah lain.",
      //     a: "",
      //     b: "",
      //     c: "",
      //     d: "",
      //     e: "",
      //     f: ""
      //   },
      //   {
      //     question:
      //       "6. ANTUSIASME/ INISIATIF : Minat untuk bergabung dan inisiatif yang ditampilkan saat wawancara.",
      //     pertanyaan:
      //       "RUBRIK (1-2) Tampak kurang berminat, menjawab dengan pasif, menunggu (3-4) Menunjukkan minat kuat, menjawab lengkap dan cukup aktif mengajukan pertanyaan (5-6) Sangat bersemangat, ajukan pertanyaan yang relevan, selfstarter.",
      //     a: "",
      //     b: "",
      //     c: "",
      //     d: "",
      //     e: "",
      //     f: ""
      //   },
      //   {
      //     question:
      //       "7. KARAKTER/ PENAMPILAN : Sifat/ karakter dan penampilan yang ditampilkan saat wawancara.",
      //     pertanyaan:
      //       "RUBRIK (1-2) Dingin, tampak tidak bersahabat, kusut, tidak merawat diri (3-4) Ramah menyenangkan, hangat, penampilan rapi dan bersih (5-6) Sangat ramah, impresif, sangat rapi, memiliki kepribadian yang menarik.",
      //     a: "",
      //     b: "",
      //     c: "",
      //     d: "",
      //     e: "",
      //     f: ""
      //   },
      //   {
      //     question:
      //       "8. KEPEMIMPINAN : Kemampuan untuk mengorganisir orang lain.",
      //     pertanyaan:
      //       "RUBRIK: (1-2) Tidak ada pengalaman kepemimpinan (3-4) Menunjukkan pengalaman yang cukup berhasil dalam kepemimpinan (5-6) Menunjukkan pengalaman sangat berhasil dalam kepemimpinan.",
      //     a: "",
      //     b: "",
      //     c: "",
      //     d: "",
      //     e: "",
      //     f: ""
      //   }
      // ]
    };
  },
  computed: {
    ...mapGetters("userQuestionAnswer", ["getUserQuestionAnswer"])
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    ...mapActions("userQuestionAnswer", [
      CREATE_CURRENT_USER_QUESTION_ANSWER,
      FETCH_CURRENT_USER_QUESTION_ANSWER,
      SUBMIT_CURRENT_USER_QUESTION_ANSWER,
      CALCULATE_USER_QUESTION_ANSWER
    ]),
    async fetchData() {
      await this[FETCH_CURRENT_USER_QUESTION_ANSWER]({ category: "Interview" });
    },
    async takeInterview() {
      console.log(this.getUserQuestionAnswer);
      if (
        this.getUserQuestionAnswer === "" ||
        this.getUserQuestionAnswer === null
      ) {
        await this[CREATE_CURRENT_USER_QUESTION_ANSWER]({
          category: "Interview"
        });
        await this.fetchData();
      }
    },
    onChangeAnswer(event, questionId, key) {
      console.log(key);
      this.getUserQuestionAnswer.questionAnswers[key] = {
        questionId,
        answerId: event.target.value
      };
    },
    checkedValue(questionId, answerId) {
      return this.getUserQuestionAnswer.questionAnswers.some(
        value => value.questionId === questionId && value.answerId === answerId
      );
    },
    async submitQuestion() {
      try {
        await this[SUBMIT_CURRENT_USER_QUESTION_ANSWER]({
          payload: this.getUserQuestionAnswer
        });
        await this[CALCULATE_USER_QUESTION_ANSWER]({
          _id: this.getUserQuestionAnswer._id,
          category: this.getUserQuestionAnswer.category
        });
      } catch (e) {
        console.log(e);
      }
    }
  }
};
</script>
