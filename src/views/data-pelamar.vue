<template>
  <dashboard>
    <div class="flex justify-center p-5  flex-grow h-full">
      <div class="p-5 bg-white rounded-xl w-full">
        <div class="text-2xl text-black mt-5 mx-5 font-bold text-center">
          Data Pelamar
        </div>
        <hr class="mt-5 border-black" />

        <div class="text-black mt-10 mx-5 overflow-x-auto">
          <t-table :headers="headers" :data="getApplicantList">
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
                  {{ props.row.username }}
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
import { mapActions, mapGetters } from "vuex";
export default {
  components: { Dashboard },
  name: "Job",
  data() {
    return {
      headers: [
        {
          value: "_id",
          text: "ID"
        },
        {
          value: "username",
          text: "Username"
        },
        {
          value: "actions",
          text: "Actions"
        }
      ]
    };
  },
  computed: {
    ...mapGetters("auth", ["getApplicantList"])
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    ...mapActions("auth", ["fetchApplicantList"]),
    fetchData() {
      this.fetchApplicantList();
    }
  }
};
</script>
