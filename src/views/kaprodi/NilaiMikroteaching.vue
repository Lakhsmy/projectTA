<template>
  <layout-kaprodi>
    <div class="flex w-5/6 p-5  flex-grow h-full">
      <div class="p-5 w-full">
        <div class="text-2xl text-black mt-5 mx-5 font-bold text-center">
          HASIL NILAI MIKROTEACHING TAHAP 1
        </div>
        <hr class="mt-10 border-black" />

        <div class="text-lg text-black mt-10 mx-0">
          <t-table
            :headers="['Name', 'E-mail', 'Score', '']"
            :data="[
              {
                id: 1,
                name: 'Alfonso Bribiesca',
                email: 'alfonso@vexilo.com',
                is_approved: true
              },
              {
                id: 2,
                name: 'Saida Redondo',
                email: 'saida@gmail.com',
                is_approved: false
              }
            ]"
            :responsive="true"
            :responsive-breakpoint="520"
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
                    <td :class="[tdClass, 'relative']">
                      <t-dropdown class="absolute top-0 right-0">
                        <template slot="button">
                          <svg
                            version="1.1"
                            viewBox="0 0 16 16"
                            class="text-gray-600 fill-current svg-icon svg-fill"
                            heigth="20"
                            style="width: 20px;"
                          >
                            <path
                              pid="0"
                              d="M13 7a2 2 0 1 1 .001 3.999A2 2 0 0 1 13 7zM8 7a2 2 0 1 1 .001 3.999A2 2 0 0 1 8 7zM3 7a2 2 0 1 1 .001 3.999A2 2 0 0 1 3 7z"
                            />
                          </svg>
                        </template>
                        <button
                          class="block w-full px-4 py-2 text-left text-gray-800 hover:text-white hover:bg-blue-500"
                        >
                          Approve
                        </button>
                        <button
                          class="block w-full px-4 py-2 text-left text-gray-800 hover:text-white hover:bg-blue-500"
                        >
                          Disagree
                        </button>
                      </t-dropdown>
                      {{ row.name }}
                    </td>
                  </tr>
                  <tr :class="trClass">
                    <div class="flex mx-5">
                      <th class="text-sm font-semibold text-gray-600 uppercase">
                        Email
                      </th>
                      <td :class="[tdClass, 'td-overflow']">
                        <a
                          :href="`mailto: ${row.email}`"
                          class="text-gray-600 hover:underline"
                          >{{ row.email }}</a
                        >
                      </td>
                    </div>
                  </tr>
                  <tr :class="trClass">
                    <th class="text-sm font-semibold text-gray-600 uppercase">
                      Status
                    </th>
                    <td :class="[tdClass]">
                      <span
                        v-if="row.is_approved"
                        class="px-5 py-1 text-sm font-bold text-green-900 bg-green-200 rounded-full d-flex"
                      >
                        0
                      </span>
                      <span
                        v-else
                        class="px-5 py-1 text-sm font-bold text-gray-900 bg-gray-200 rounded-full d-flex"
                      >
                        0
                      </span>
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
                <td :class="[tdClass, 'w-full']">
                  {{ row.name }}
                </td>
                <td :class="tdClass">
                  <a
                    :href="`mailto: ${row.email}`"
                    class="text-gray-600 hover:underline"
                    >{{ row.email }}</a
                  >
                </td>
                <td :class="[tdClass, 'text-center']">
                  <span
                    v-if="row.is_approved"
                    class="px-5 py-2 text-sm font-bold text-green-900 bg-green-200 rounded-full d-flex"
                  >
                    0
                  </span>
                  <span
                    v-else
                    class="px-5 py-2 text-sm font-bold text-gray-900 bg-gray-200 rounded-full d-flex"
                  >
                    0
                  </span>
                </td>
                <td :class="[tdClass, 'text-right']">
                  <t-dropdown>
                    <template slot="button">
                      <svg
                        version="1.1"
                        viewBox="0 0 16 16"
                        class="text-gray-600 fill-current svg-icon svg-fill"
                        heigth="20"
                        style="width: 20px;"
                      >
                        <path
                          pid="0"
                          d="M13 7a2 2 0 1 1 .001 3.999A2 2 0 0 1 13 7zM8 7a2 2 0 1 1 .001 3.999A2 2 0 0 1 8 7zM3 7a2 2 0 1 1 .001 3.999A2 2 0 0 1 3 7z"
                        />
                      </svg>
                    </template>
                    <button
                      class="block w-full px-4 py-2 text-left text-gray-800 hover:text-white hover:bg-blue-500"
                    >
                      Approve
                    </button>
                    <button
                      class="block w-full px-4 py-2 text-left text-gray-800 hover:text-white hover:bg-blue-500"
                    >
                      Disagree
                    </button>
                  </t-dropdown>
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
                      :hide-prev-next-controls="renderResponsive"
                      :total-items="100"
                      :per-page="renderResponsive ? 3 : 5"
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
      </div>
    </div>
  </layout-kaprodi>
</template>

<script>
import LayoutKaprodi from "../../components/LayoutKaprodi.vue";
export default {
  name: "NilaiMikroteaching",
  components: { LayoutKaprodi }
};
</script>
