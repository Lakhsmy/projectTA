<template>
  <dashboard>
    <div class="p-5 bg-white rounded-xl w-full pb-5 mb-10">
      <div class="text-2xl text-black mt-2 mx-5 font-bold text-center">
        SOAL PSIKOTEST
      </div>
      <hr class="mt-5 border-black" />
      <div
        v-if="
          getUserQuestionAnswer &&
            getUserQuestionAnswer.questionSet &&
            getUserQuestionAnswer.questionSet.questionSet.length > 0
        "
      >
        <div
          v-for="(value, key) in getUserQuestionAnswer.questionSet.questionSet"
          :key="key"
        >
          <div class="mt-5">{{ key + 1 }}.{{ value.question }}</div>
          <div class="flex flex-row flex-wrap ">
            <div
              class="mx-5"
              v-for="(answerValue, answerIndex) in value.answerOptions"
              :key="answerIndex"
            >
              {{ numberToAlphabet(answerValue.optionNumber) }}.
              <t-radio
                :name="`options[${key}]`"
                :value="answerValue._id"
                @change="onChangeAnswer($event, value._id, answerIndex)"
              />
              {{ answerValue.answerBody }}
            </div>
          </div>
        </div>
      </div>
      <div class="mt-5">
        <t-button @click="submitQuestion">Submit</t-button>
      </div>

      <!--      <div v-for="(value,key) in "></div>-->
      <!--      <div v-for="(value, key) in questionList" :key="key">-->
      <!--        <div class="mt-5">-->
      <!--          {{ value.question }}-->
      <!--        </div>-->
      <!--        <div class="flex flex-row ">-->
      <!--          <div class="mx-5">-->
      <!--            <t-radio name="options" :value="value.a" />-->
      <!--            {{ value.a }}-->
      <!--          </div>-->
      <!--          <div class="mx-28">-->
      <!--            <t-radio name="options" :value="value.b" />-->
      <!--            {{ value.b }}-->
      <!--          </div>-->
      <!--        </div>-->
      <!--        <div class="flex flex-row">-->
      <!--          <div class="mx-5">-->
      <!--            <t-radio name="options" :value="value.c" />-->
      <!--            {{ value.c }}-->
      <!--          </div>-->
      <!--          <div class="mx-28">-->
      <!--            <t-radio name="options" :value="value.d" />-->
      <!--            {{ value.d }}-->
      <!--          </div>-->
      <!--        </div>-->
      <!--      </div>-->
      <t-button v-if="getUserQuestionAnswer === null" @click="takePsikotest">
        Take Psikotest
      </t-button>
    </div>
  </dashboard>
</template>

<script>
import Dashboard from "@/components/Dashboard";
import { mapActions, mapGetters } from "vuex";
import {
  CREATE_CURRENT_USER_QUESTION_ANSWER,
  FETCH_CURRENT_USER_QUESTION_ANSWER,
  SUBMIT_CURRENT_USER_QUESTION_ANSWER
} from "@/store/module/user-question-answer.module";

export default {
  name: "Psikotest",
  components: { Dashboard },
  computed: {
    ...mapGetters("userQuestionAnswer", ["getUserQuestionAnswer"])
  },
  data() {
    return {};
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    ...mapActions("userQuestionAnswer", [
      FETCH_CURRENT_USER_QUESTION_ANSWER,
      SUBMIT_CURRENT_USER_QUESTION_ANSWER
    ]),
    async fetchData() {
      await this[FETCH_CURRENT_USER_QUESTION_ANSWER]({ category: "Psikotest" });
    },
    async takePsikotest() {
      console.log(this.getUserQuestionAnswer);
      if (
        this.getUserQuestionAnswer === "" &&
        this.getUserQuestionAnswer === null
      ) {
        await this[CREATE_CURRENT_USER_QUESTION_ANSWER]({
          category: "Psikotest"
        });
      }
    },
    numberToAlphabet(value) {
      const alphabetObject = {
        1: "A",
        2: "B",
        3: "C",
        4: "D"
      };

      return alphabetObject[value];
    },
    onChangeAnswer(event, questionId, key) {
      this.getUserQuestionAnswer.questionAnswers[key] = {
        questionId,
        answerId: event.target.value
      };
    },
    submitQuestion() {
      try {
        this[SUBMIT_CURRENT_USER_QUESTION_ANSWER]({
          payload: this.getUserQuestionAnswer
        });
      } catch (e) {
        console.log(e);
      }
    }
  }
};
</script>
