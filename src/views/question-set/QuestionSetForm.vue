<template>
  <dashboard>
    <div class="flex justify-center p-5  flex-grow h-full">
      <div class="p-5 bg-white rounded-xl w-full">
        <div class="text-2xl text-black mt-5 mx-5 font-bold text-center">
          Buat Form Pertanyaan Baru
        </div>
        <hr class="mt-5 border-black" />

        <div class="text-black mt-10 mx-5">
          <form>
            <div class="mb-5">
              <label>Title</label>
              <t-input class="mt-2" v-model="form.title" />
            </div>
            <div class="mb-5">
              <label>Question Type</label>
              <t-select
                class="mt-2"
                v-model="form.questionType"
                :options="questionTypeList"
              />
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
                v-for="(question, questionKey) in form.questionSet"
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
export default {
  components: { Dashboard },
  name: "QuestionSetForm",
  data() {
    return {
      selectedQuestion: "",
      questionTypeList: ["Interview", "Psikotest"],
      form: {
        title: "",
        questionSet: [],
        questionType: ""
      }
    };
  },
  computed: {
    ...mapGetters("question", ["getQuestionList"])
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    ...mapActions("question", [FETCH_QUESTION_LISTS]),
    fetchData() {
      this[FETCH_QUESTION_LISTS]();
    },
    addQuestion() {
      const questionId = this.selectedQuestion;
      const getQuestionObject = this.getQuestionList.find(
        value => value._id == questionId
      );
      const checkIfQuestionAlreadyExists = this.form.questionSet.some(
        value => value._id == questionId
      );
      if (!checkIfQuestionAlreadyExists) {
        this.form.questionSet.push(Object.assign({}, getQuestionObject));
      }
    },
    removeQuestion(questionIndex) {
      this.form.questionSet.splice(questionIndex, 1);
    }
  }
};
</script>
