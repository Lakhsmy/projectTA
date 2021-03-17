<template>
  <dashboard>
    <div class="flex justify-center p-5  flex-grow h-full">
      <div class="p-5 bg-white rounded-xl w-full">
        <div class="text-2xl text-black mt-5 mx-5 font-bold text-center">
          Buat Form Pertanyaan Baru
        </div>
        <hr class="mt-5 border-black" />

        <div class="text-black mt-10 mx-5">
          <form @submit.prevent="submitQuestion">
            <div class="mb-5">
              <label>Title</label>
              <t-input class="mt-2" v-model="getQuestion.question" />
            </div>
            <div class="mb-5">
              <label>Description</label>
              <t-input class="mt-2" v-model="getQuestion.description" />
            </div>
            <div class="mb-5">
              <label>Question Type</label>
              <t-select
                class="mt-2"
                v-model="getQuestion.questionType"
                :options="questionTypeList"
              />
            </div>
            <div class="mb-5">
              <label>Question Category</label>
              <t-select
                class="mt-2"
                v-model="getQuestion.questionCategory"
                :options="questionCategoryList"
              />
            </div>
            <div class="flex flex-row mb-5">
              <t-button type="button" @click="addOption">Add Option+</t-button>
            </div>
            <div>
              Option List
              <draggable
                v-model="getQuestion.answerOptions"
                group="options"
                @add="onAddOption"
                @start="onStartDrag"
                @end="onEndDrag"
              >
                <div
                  v-for="(option, optionKey) in getQuestion.answerOptions"
                  :key="optionKey"
                  class="p-5 flex flex-row rounded-lg bg-gray-50 shadow-lg"
                >
                  <div class="w-1/12 flex flex-row align-self-center">
                    <input
                      type="number"
                      v-model.number="option.optionNumber"
                    />.
                  </div>
                  <div class="w-6/12">
                    <t-input v-model="option.answerBody" />
                  </div>
                  <div class="w-2/12">
                    <t-select
                      v-model="option.isCorrectAnswer"
                      :options="['false', 'true']"
                    />
                  </div>
                  <div>
                    <t-button
                      class="ml-5"
                      type="button"
                      variant="error"
                      @click="removeOption(optionKey)"
                      >-</t-button
                    >
                  </div>
                </div>
              </draggable>
            </div>
            <div>
              <t-button type="submit">Submit</t-button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </dashboard>
</template>

<script>
import Dashboard from "@/components/Dashboard";
import draggable from "vuedraggable";

import {
  CREATE_QUESTION,
  FETCH_QUESTION,
  RESET_QUESTION,
  UPDATE_QUESTION
} from "@/store/module/question.module";
import { mapActions, mapGetters } from "vuex";
export default {
  components: { Dashboard, draggable },
  name: "QuestionSetForm",
  data() {
    return {
      selectedQuestion: "",
      action: this.$route.params.action,
      id: this.$route.params.id,
      questionTypeList: ["", "MultipleChoice"],
      questionCategoryList: ["", "Interview", "Psikotest", "Microteaching"],
      form: {
        question: "",
        answerOptions: [],
        questionType: ""
      }
    };
  },
  computed: {
    ...mapGetters("question", ["getQuestionList", "getQuestion"])
  },
  mounted() {
    this.fetchData();
  },
  watch: {
    $route(to) {
      this.action = to.params.action;
      this.id = to.params.id;
    }
  },
  methods: {
    ...mapActions("question", [
      FETCH_QUESTION,
      CREATE_QUESTION,
      UPDATE_QUESTION,
      RESET_QUESTION
    ]),
    onStartDrag(e) {
      console.log(e);
    },
    onEndDrag(e) {
      console.log(e);
      this.getQuestion.answerOptions[e.newIndex].optionNumber = e.newIndex + 1;
      this.getQuestion.answerOptions[e.oldIndex].optionNumber = e.oldIndex + 1;
    },
    onAddOption(e, t) {
      console.log(e, t);
    },
    async fetchData() {
      // this[FETCH_QUESTION_LISTS]();
      // this.fetchData();
      if (this.action == "edit") {
        await this[FETCH_QUESTION]({ id: this.id });
        this.getQuestion.answerOptions = this.getQuestion.answerOptions.map(
          value => {
            return {
              ...value,
              isCorrectAnswer: String(value.isCorrectAnswer)
            };
          }
        );
      } else {
        await this[RESET_QUESTION]();
      }
    },
    async submitQuestion() {
      try {
        this.getQuestion.answerOptions = this.getQuestion.answerOptions.map(
          value => {
            console.log(value);
            let isCorrect = value.isCorrectAnswer !== "false";
            return {
              ...value,
              isCorrectAnswer: isCorrect
            };
          }
        );
        if (this.action === "edit") {
          await this[UPDATE_QUESTION]({
            id: this.id,
            payload: this.getQuestion
          });
        } else {
          await this[CREATE_QUESTION]({ payload: this.getQuestion });
        }
        await this.$router.push({ name: "QuestionList" });
      } catch (e) {
        console.log(e);
        alert("Error");
      }
    },
    addOption() {
      const getOptionsLength = this.getQuestion.answerOptions.length;

      let payload = {
        optionNumber: getOptionsLength + 1,
        answerBody: "",
        isCorrectAnswer: "false"
      };
      // if (!checkIfQuestionAlreadyExists) {
      this.getQuestion.answerOptions.push(Object.assign({}, payload));
      // }
    },
    removeOption(questionIndex) {
      this.getQuestion.answerOptions.splice(questionIndex, 1);
    }
  }
};
</script>
