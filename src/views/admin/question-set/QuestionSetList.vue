<template>
  <dashboard>
    <div class="flex justify-center p-5  flex-grow h-full">
      <div class="p-5 bg-white rounded-xl w-full">
        <div class="text-2xl text-black mt-5 mx-5 font-bold text-center">
          Data Form Pertanyaan
        </div>
        <t-button
          :to="{ name: 'QuestionSetCreate', params: { action: 'create' } }"
        >
          Buat Form
        </t-button>
        <hr class="mt-5 border-black" />

        <div class="text-black mt-10 mx-5 overflow-x-auto">
          <t-table :headers="headers" :data="getQuestionSetList">
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
                  {{ props.row.questionSetCategory }}
                </td>
                <td :class="props.tdClass">
                  <t-button
                    :to="{
                      name: 'QuestionSetEdit',
                      params: { action: 'edit', id: props.row._id }
                    }"
                    variant="secondary"
                    >Edit</t-button
                  >
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
import { FETCH_QUESTION_SET_LISTS } from "@/store/module/question-set.module";
import { mapActions, mapGetters } from "vuex";
export default {
  components: { Dashboard },
  name: "QuestionSetList",
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
    ...mapGetters("questionSet", ["getQuestionSetList"])
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    ...mapActions("questionSet", [FETCH_QUESTION_SET_LISTS]),
    fetchData() {
      this[FETCH_QUESTION_SET_LISTS]();
    }
  }
};
</script>
