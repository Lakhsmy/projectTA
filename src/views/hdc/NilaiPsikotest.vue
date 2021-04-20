<template>
  <dashboard>
    <div class="flex w-full p-5 flex-grow h-full">
      <t-card class="p-5 w-full">
        <div class="text-2xl text-black mt-5 mx-5 font-bold text-center">
          HASIL NILAI PSIKOTEST PELAMAR
        </div>
        <hr class="mt-10 border-black" />

        <div class="text-lg text-black mt-10 mx-0">
          <t-table
            :headers="[
              'Name',
              'E-mail',
              'Status',
              'Is Passed',
              'Score',
              'Action'
            ]"
            :data="userResultList"
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
                  :class="[tbodyClass, rowIndex % 2 === 0 ? 'bg-gray-100' : '']"
                >
                  <tr :class="trClass">
                    <th class="text-sm font-semibold text-gray-600 uppercase">
                      Name
                    </th>
                    <td :class="[tdClass, 'td-overflow']">
                      {{ row.candidate.fullName }}
                    </td>
                  </tr>
                  <tr :class="trClass">
                    <!-- <div class="flex"> -->
                    <th class="text-sm font-semibold text-gray-600 uppercase">
                      Email
                    </th>
                    <td :class="[tdClass, 'td-overflow']">
                      <a
                        :href="`mailto: ${row.candidate.email}`"
                        class="text-gray-600 hover:underline break-all"
                        >{{ row.candidate.email }}</a
                      >
                    </td>
                    <!-- </div> -->
                  </tr>
                  <tr :class="trClass">
                    <th class="text-sm font-semibold text-gray-600 uppercase">
                      Status
                    </th>
                    <td :class="[tdClass]">
                      <status-button :status="row.status" />
                    </td>
                  </tr>
                  <tr :class="trClass">
                    <th :class="[tdClass]">
                      Is Passed
                    </th>
                    <td>
                      {{ row.isPassed }}
                    </td>
                  </tr>
                  <tr :class="trClass">
                    <th
                      :class="[tdClass]"
                      class="text-sm font-semibold text-gray-600 uppercase"
                    >
                      Action
                    </th>
                    <td class="flex">
                      <button
                        class="rounded-lg px-4 py-2 text-left text-gray-800 bg-yellow-300 hover:text-white hover:bg-blue-500"
                        @click="onChangeStatus(row._id, 2)"
                      >
                        Approve
                      </button>
                      <button
                        class="rounded-lg px-4 py-2 text-left text-white bg-red-500 hover:text-white hover:bg-blue-500"
                        @click="onChangeStatus(row._id, 3)"
                      >
                        Disagree
                      </button>
                    </td>
                  </tr>
                </tbody>
              </template>
            </template>
            <template
              slot="row"
              slot-scope="{ trClass, tdClass, rowIndex, row }"
            >
              <tr :class="[trClass, rowIndex % 2 === 0 ? 'bg-gray-100' : '']">
                <td :class="[tdClass]">
                  {{ row.candidate.fullName }}
                </td>
                <td :class="tdClass">
                  <a
                    :href="`mailto: ${row.candidate.email}`"
                    class="text-gray-600 hover:underline"
                    >{{ row.candidate.email }}</a
                  >
                </td>
                <td :class="[tdClass]">
                  <status-button :status="row.status" />
                </td>
                <td :class="[tdClass]">
                  {{ row.isPassed }}
                </td>
                <td :class="[tdClass, 'text-center']">
                  {{ row.totalScore }}
                </td>
                <td :class="[tdClass, 'text-center']">
                  <div v-if="row.status == 1">
                    <button
                      class="rounded-lg px-4 py-2 text-left mb-2 text-gray-800 bg-yellow-300 hover:text-white hover:bg-blue-500"
                      @click="onChangeStatus(row._id, 2)"
                    >
                      Approve
                    </button>
                    <button
                      class="rounded-lg px-4 py-2 text-left text-white bg-red-500 hover:text-white hover:bg-blue-500"
                      @click="onChangeStatus(row._id, 3)"
                    >
                      Disagree
                    </button>
                  </div>
                </td>
              </tr>
            </template>
            <template
              slot="tfoot"
              slot-scope="{ tfootClass, trClass, tdClass, renderResponsive }"
            >
              <tfoot :class="tfootClass">
                <tr :class="trClass">
                  <td :class="tdClass" :colspan="renderResponsive ? 2 : 4">
                    <t-pagination
                      class="mt-3"
                      :hide-prev-next-controls="renderResponsive"
                      :total-items="userResultList.length"
                      :per-page="renderResponsive ? 3 : 5"
                      v-model="currentPage"
                      :class="{
                        'ml-auto': !renderResponsive,
                        'mx-auto': renderResponsive
                      }"
                    />
                  </td>
                </tr>
              </tfoot>
            </template>
          </t-table>
        </div>
      </t-card>
    </div>
  </dashboard>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Dashboard from "../../components/Dashboard.vue";
import StatusButton from "../../components/StatusButton.vue";

export default {
  name: "NilaiPsikotest",
  components: { Dashboard, StatusButton },
  data() {
    return { currentPage: 1 };
  },
  computed: {
    ...mapState("userQuestionAnswer", ["userResultList"])
  },
  async mounted() {
    await this.fetchData();
  },
  methods: {
    ...mapActions("userQuestionAnswer", [
      "getAllUserQuestionAnswer",
      "changeQuestionStatus"
    ]),
    async fetchData() {
      await this.getAllUserQuestionAnswer({ category: "Psikotest" });
    },

    async onChangeStatus(id, status) {
      await this.changeQuestionStatus({ id, status });
      await this.fetchData();
    }
  }
};
</script>
