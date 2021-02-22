<template>
  <dashboard>
    <div class="flex justify-center p-5  flex-grow h-full">
      <div class="p-5 bg-white rounded-xl w-full">
        <div class="text-2xl text-black mt-5 mx-5 font-bold text-center">
          Data Form Pertanyaan
        </div>
        <t-button
          :to="{ name: 'QuestionCreate', params: { action: 'create' } }"
        >
          Buat Form
        </t-button>
        <hr class="mt-5 border-black" />

        <div class="text-black mt-10 mx-5 overflow-x-auto">
          <t-table :headers="headers" :data="getQuestionList">
            <template slot="row" slot-scope="props">
              <tr
                :class="[
                  props.trClass
                  // props.rowIndex % 2 === 0 ? 'bg-gray-100' : ''
                ]"
              >
                <td :class="props.tdClass">
                  {{ props.row._id }}
                </td>
                <td :class="props.tdClass">
                  {{ props.row.title }}
                </td>
                <td :class="props.tdClass">
                  {{ props.row.questionType }}
                </td>
                <td :class="props.tdClass">
                  <t-button variant="secondary">Edit</t-button>
                </td>
              </tr>
            </template>
          </t-table>
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
  name: "questionList",
  data() {
    return {
      headers: [
        {
          value: "_id",
          text: "ID"
        },
        {
          value: "title",
          text: "Title"
        },
        {
          value: "questionType",
          text: "Question Type"
        },
        {
          value: "actions",
          text: "Actions"
        }
      ]
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
    }
  }
};
</script>
