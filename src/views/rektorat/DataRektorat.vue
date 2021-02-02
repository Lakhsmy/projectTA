<template>
  <layout-rektorat>
    <div class="flex w-5/6 p-5 flex-grow h-full">
      <div class="p-5 w-full">
        <div class="text-2xl text-black mt-5 mx-5 font-bold text-center">
          DATA PELAMAR BARU
        </div>
        <hr class="mt-10 border-black" />
        <div class="text-lg text-black mt-10 mx-10">
          <t-table
            :headers="['No', 'Nama', 'Email', 'Data Pelamar']"
            :data="[
              ['1.', 'Eca', 'alfonso@vexilo.com', 'Selengkapnya'],
              ['2.', 'Ani', 'saida@gmail.com', 'Selengkapnya']
            ]"
          >
          </t-table>
        </div>
      </div>
    </div>
  </layout-rektorat>
</template>

<script>
import LayoutRektorat from "../../components/LayoutRektorat.vue";
export default {
  components: { LayoutRektorat },
  name: "DataRektorat"
};
</script>
