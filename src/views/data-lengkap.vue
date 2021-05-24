<template>
  <dashboard>
    <div class="flex justify-center p-0 lg:p-5 flex-grow h-full">
      <div class="p-5 bg-white rounded-xl w-full">
        <div class="text-2xl text-black mt-5 mx-5 font-bold text-center">
          Data Lengkap Pelamar
        </div>
        <hr class="mt-5 border-black" />

        <div class="text-black mt-10 mx-0 lg:mx-5 overflow-x-auto">
          <t-table :headers="headers" :data="userList">
            <template slot="row" slot-scope="props">
              <tr
                :class="[
                  props.trClass
                  // props.rowIndex % 2 === 0 ? 'bg-gray-100' : ''
                ]"
              >
                <!-- <td :class="props.tdClass">
                  {{ props.row._id }}
                </td> -->
                <td :class="props.tdClass">
                  {{ props.row.fullName }}
                </td>
                <td :class="props.tdClass">
                  {{ props.row.email }}
                </td>
                <td :class="props.tdClass">
                  {{ props.row.latestEducation }}
                </td>
                <td :class="props.tdClass">
                  {{ props.row.major }}
                </td>
                <td :class="props.tdClass">
                  {{ props.row.ipk }}
                </td>
                <td :class="props.tdClass">
                  <a
                    :href="props.row.cv_url"
                    v-if="props.row.cv_url"
                    target="_blank"
                    >lihat</a
                  >
                  <span>Tidak Ada CV</span>
                </td>

                <!-- <a href="userList.cv" target="_blank">lihat</a> -->

                <!-- <td :class="props.tdClass">
                  <t-button variant="secondary">selengkapnya</t-button>
                </td> -->
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
import { mapActions, mapState } from "vuex";
export default {
  components: { Dashboard },
  name: "Job",
  data() {
    return {
      headers: [
        // {
        //   value: "_id",
        //   text: "ID"
        // },
        {
          value: "fullName",
          text: "Fullname"
        },
        {
          value: "email",
          text: "Email"
        },
        {
          value: "latestEducation",
          text: "Pendidikan Terakhir"
        },
        {
          value: "major",
          text: "Jurusan Terpilih"
        },
        {
          value: "ipk",
          text: "IPK"
        },
        {
          value: "cv",
          text: "CV"
        }
      ]
    };
  },
  computed: {
    ...mapState("user", ["userList"])
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    ...mapActions("user", ["fetchUserList"]),
    fetchData() {
      this.fetchUserList();
    }
  }
};
</script>
