<template>
  <dashboard>
    <div class="flex justify-center p-5  flex-grow h-full">
      <div class="p-5 bg-white rounded-xl w-full">
        <div class="text-2xl text-black mt-5 mx-5 font-bold text-center">
          Data Pelamar
        </div>
        <hr class="mt-5 border-black" />

        <div class="text-lg text-black mt-10 mx-10">
          <table class="w-full bg-white rounded shadow">
            <thead>
              <tr class="text-left text-xs">
                <th class="pl-6 py-4 font-bold">ID</th>
                <th class="pl-6 text-center py-4 font-bold">Fullname</th>
                <th class="px-4 text-center py-4 font-bold">Email</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-t border-blueGray-100">
                <td class="flex px-2 py-4 text-xs">
                  <div class="pl-4">
                    <p class="font-semibold">001</p>
                  </div>
                </td>
                <td class="px-6 py-2 text-xs">
                  <div class="py-1 px-3 text-xs text-center font-semibold">
                    Cika cika
                  </div>
                </td>
                <td class="px-4 py-2 text-xs text-center font-semibold">
                  cikacika@gmail.com
                </td>
              </tr>
              <tr class="border-t border-blueGray-100">
                <td class="flex px-2 py-4 text-xs">
                  <div class="pl-4">
                    <p class="font-semibold">002</p>
                  </div>
                </td>
                <td class="px-4 py-2 text-xs">
                  <div class="py-1 px-3 text-xs text-center font-semibold">
                    Rizal rizal
                  </div>
                </td>
                <td class="px-4 py-2 text-xs text-center font-semibold">
                  rizal.rizal@gmail.com
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- <div class="text-black mt-10 mx-5 overflow-x-auto">
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
                  {{ props.row.fullName }}
                </td>
                <td :class="props.tdClass">
                  {{ props.row.email }}
                </td>
                <td :class="props.tdClass">
                  <t-button variant="secondary">Edit</t-button>
                </td>
              </tr>
            </template>
          </t-table>
        </div> -->
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
          value: "fullName",
          text: "Fullname"
        },
        {
          value: "email",
          text: "Email"
        }
        // {
        //   value: "actions",
        //   text: "Actions"
        // }
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
