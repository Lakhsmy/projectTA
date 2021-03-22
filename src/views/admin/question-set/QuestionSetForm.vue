<template>
  <dashboard>
    <div class="flex justify-center p-5  flex-grow h-full">
      <div class="p-5 bg-white rounded-xl w-full">
        <div class="text-2xl text-black mt-5 mx-5 font-bold text-center">
          Buat Form Pertanyaan Baru
        </div>
        <hr class="mt-5 border-black" />

        <div class="text-black mt-10 mx-5">
          <form @submit.prevent="onSubmit">
            <div class="mb-5">
              <label>Title</label>
              <t-input class="mt-2" v-model="getQuestionSet.title" />
            </div>
            <div class="mb-5">
              <label>Question Category</label>
              <t-select
                class="mt-2"
                v-model="getQuestionSet.questionSetCategory"
                @change="onChangeQuestionSetCategory"
                :options="questionSetCategoryList"
              />
            </div>
            <div class="mb-5">
              <label class="mr-5">Is Active</label>
              <t-checkbox v-model="getQuestionSet.isActive" :value="true" />
            </div>
            <div>
              <label>Pick a Question</label>
              <div class="flex flex-row">
                <t-rich-select
                  class="w-11/12 mt-2"
                  v-model="selectedQuestion"
                  :options="getQuestionList"
                  value-attribute="_id"
                  text-attribute="question"
                />
                <t-button type="button" class="ml-5" @click="addQuestion"
                  >+</t-button
                >
              </div>
            </div>
            <div>
              Question List
              <div
                v-for="(question, questionKey) in getQuestionSet.questionSet"
                :key="questionKey"
                class="p-5 flex flex-row rounded-lg bg-gray-50 shadow-lg"
              >
                <div class="w-5/6">
                  {{ questionKey + 1 }}. {{ question.question }}
                </div>
                <div>
                  <t-button
                    type="button"
                    variant="error"
                    @click="removeQuestion(questionKey)"
                    >-</t-button
                  >
                </div>
              </div>
            </div>
            <div class="my-2">
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
import { FETCH_QUESTION_LISTS } from "@/store/module/question.module";
import { mapActions, mapGetters } from "vuex";
import {
  CREATE_QUESTION_SET,
  FETCH_QUESTION_SET,
  RESET_QUESTION_SET,
  UPDATE_QUESTION_SET
} from "@/store/module/question-set.module";
export default {
  components: { Dashboard },
  name: "QuestionSetForm",
  data() {
    return {
      selectedQuestion: "",
      selectedQuestionSetCategory: "",
      action: this.$route.params.action,
      id: this.$route.params.id,
      questionSetCategoryList: ["", "Interview", "Psikotest", "Microteaching"]
    };
  },
  computed: {
    ...mapGetters("question", ["getQuestionList"]),
    ...mapGetters("questionSet", ["getQuestionSet"])
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    ...mapActions("questionSet", [
      CREATE_QUESTION_SET,
      UPDATE_QUESTION_SET,
      FETCH_QUESTION_SET,
      RESET_QUESTION_SET
    ]),
    ...mapActions("question", [FETCH_QUESTION_LISTS]),
    async fetchData() {
      this[FETCH_QUESTION_LISTS]({
        questionCategory: this.getQuestionSet.questionSetCategory
      });
      if (this.action === "edit") {
        await this[FETCH_QUESTION_SET]({ id: this.id });
      } else {
        await this[RESET_QUESTION_SET]();
      }
    },
    onChangeQuestionSetCategory() {
      this[FETCH_QUESTION_LISTS]({
        questionCategory: this.getQuestionSet.questionSetCategory
      });
    },
    addQuestion() {
      const questionId = this.selectedQuestion;
      const getQuestionObject = this.getQuestionList.find(
        value => value._id === questionId
      );
      const checkIfQuestionAlreadyExists = this.getQuestionSet.questionSet.some(
        value => value._id === questionId
      );
      if (!checkIfQuestionAlreadyExists) {
        this.getQuestionSet.questionSet.push(
          Object.assign({}, getQuestionObject)
        );
      }
    },
    removeQuestion(questionIndex) {
      this.getQuestionSet.questionSet.splice(questionIndex, 1);
    },
    async onSubmit() {
      try {
        // this.getQuestion.answerOptions = this.getQuestion.answerOptions.map(
        //   value => {
        //     console.log(value);
        //     let isCorrect = value.isCorrectAnswer !== "false";
        //     return {
        //       ...value,
        //       isCorrectAnswer: isCorrect
        //     };
        //   }
        // );
        if (this.action === "edit") {
          await this[UPDATE_QUESTION_SET]({
            id: this.id,
            payload: this.getQuestionSet
          });
        } else {
          await this[CREATE_QUESTION_SET]({ payload: this.getQuestionSet });
        }
        await this.$router.push({ name: "QuestionSetList" });
      } catch (e) {
        console.log(e);
        alert("Error");
      }
    }
  }
};
</script>
