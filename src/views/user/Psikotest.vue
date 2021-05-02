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
              <input
                type="radio"
                :name="`options[${key}]`"
                :value="answerValue._id"
                @change="onChangeAnswer($event, value._id, key)"
                :checked="checkedValue(value._id, answerValue._id)"
              />
              {{ answerValue.answerBody }}
            </div>
          </div>
        </div>
      </div>
      <div class="mt-5">
        <t-button v-if="getUserQuestionAnswer !== null" @click="submitQuestion"
          >Submit</t-button
        >
      </div>

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
  CALCULATE_USER_QUESTION_ANSWER,
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
      CREATE_CURRENT_USER_QUESTION_ANSWER,
      FETCH_CURRENT_USER_QUESTION_ANSWER,
      SUBMIT_CURRENT_USER_QUESTION_ANSWER,
      CALCULATE_USER_QUESTION_ANSWER
    ]),
    async fetchData() {
      await this[FETCH_CURRENT_USER_QUESTION_ANSWER]({ category: "Psikotest" });
    },
    async takePsikotest() {
      console.log(this.getUserQuestionAnswer);
      if (
        this.getUserQuestionAnswer === "" ||
        this.getUserQuestionAnswer === null
      ) {
        await this[CREATE_CURRENT_USER_QUESTION_ANSWER]({
          category: "Psikotest"
        });
        await this.fetchData();
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
