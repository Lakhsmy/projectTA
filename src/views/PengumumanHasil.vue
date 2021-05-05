<template>
  <dashboard>
    <div class="flex w-full lg:p-5 flex-grow h-full">
      <div class="p-5 w-full">
        <div class="text-2xl text-black mt-5 mx-5 font-bold text-center">
          Hasil SAW
        </div>
        <hr class="mt-10 border-black" />

        <div class="text-lg text-black mt-10 lg:mx-10">
          <table class="w-full bg-white rounded shadow">
            <thead>
              <tr class="text-left text-xs">
                <th class="pl-6 py-4 font-bold">Nama</th>
                <th class="px-4 py-4 font-bold">Score</th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="border-t border-blueGray-100"
                v-for="(value, key) in this.sawResults"
                :key="key"
              >
                <td class="flex px-6 py-4 text-xs">
                  <div class="pl-4">
                    <p class="font-semibold">{{ value.name }}</p>
                  </div>
                </td>
                <td class="px-4 py-2 text-xs font-semibold">
                  {{ value.total }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </dashboard>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Dashboard from "../components/Dashboard.vue";
export default {
  name: "Pengumuman",
  components: { Dashboard },
  computed: {
    ...mapState("saw", ["sawResults"])
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    ...mapActions("saw", ["fetchSAWResult"]),
    async fetchData() {
      await this.fetchSAWResult();
    }
  }
};
</script>
