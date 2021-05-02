<template>
  <dashboard>
    <div class="flex w-full p-5 flex-grow h-full">
      <t-card class="p-5 w-full">
        <div class="text-2xl text-black mt-5 mx-5 font-bold text-center">
          HASIL PELAMAR LOLOS PSIKOTEST
        </div>
        <hr class="mt-10 border-black" />

        <div class="text-lg text-black mt-10 mx-0">
          <t-table
            :headers="['Name', 'E-mail', 'Score']"
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
                  </tr>
                  <tr :class="trClass">
                    <th class="text-sm font-semibold text-gray-600 uppercase">
                      Score
                    </th>
                    <td :class="[tdClass]">
                      {{ row.totalScore }}
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
                <td :class="[tdClass, 'text-center']">
                  {{ row.totalScore }}
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
                      v-if="userResultList.length > 0"
                      :hide-prev-next-controls="renderResponsive"
                      :total-items="userResultList.length"
                      :per-page="renderResponsive ? 3 : 5"
                      v-model="currentPage"
                      :class="{
                        'ml-auto': !renderResponsive,
                        'mx-auto': renderResponsive
                      }"
                    />
                    <div v-else class="text-center py-2 text-gray-600">
                      No Data Available
                    </div>
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
export default {
  name: "LolosPsikotest",
  components: { Dashboard },
  data() {
    return {
      currentPage: 1,
      headers: [
        {
          id: "name",
          value: "candidate.fullName",
          text: "Name"
        },
        {
          id: "email",
          value: "candidate.email",
          text: "Email"
        }
      ]
    };
  },
  computed: {
    ...mapState("userQuestionAnswer", ["userResultList"])
  },
  mounted() {
    this.getAllUserQuestionAnswer({ category: "Psikotest", status: 2 });
  },
  methods: {
    ...mapActions("userQuestionAnswer", ["getAllUserQuestionAnswer"])
  }
};
</script>
