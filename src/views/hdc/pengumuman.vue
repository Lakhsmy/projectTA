<template>
  <dashboard>
    <div class="flex w-full p-5 flex-grow h-full">
      <div class="p-5 w-full">
        <div class="text-2xl text-black mt-5 mx-5 font-bold text-center">
          HASIL PELAMAR LOLOS PSIKOTEST
        </div>
        <hr class="mt-10 border-black" />

        <div class="text-lg text-black mt-10 mx-10">
          <table class="w-full bg-white rounded shadow">
            <thead>
              <tr class="text-left text-xs">
                <th class="pl-6 py-4 font-bold">Nama</th>
                <th class="pl-6 py-4 font-bold">Email</th>
                <th class="px-4 py-4 font-bold">Score</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-t border-blueGray-100">
                <td class="flex px-6 py-4 text-xs">
                  <div class="pl-4">
                    <p class="font-semibold">React</p>
                  </div>
                </td>
                <td class="px-4 py-2 text-xs">
                  <div class="py-1 px-3 text-xs font-semibold">
                    React@gmail.com
                  </div>
                </td>
                <td class="px-4 py-2 text-xs font-semibold">576</td>
              </tr>
              <tr class="border-t border-blueGray-100">
                <td class="flex px-6 py-4 text-xs">
                  <div class="pl-4">
                    <p class="font-semibold">React</p>
                  </div>
                </td>
                <td class="px-4 py-2 text-xs">
                  <div class="py-1 px-3 text-xs font-semibold">
                    React@gmail.com
                  </div>
                </td>
                <td class="px-4 py-2 text-xs font-semibold">576</td>
              </tr>
              <tr class="border-t border-blueGray-100">
                <td class="flex px-6 py-4 text-xs">
                  <div class="pl-4">
                    <p class="font-semibold">React</p>
                  </div>
                </td>
                <td class="px-4 py-2 text-xs">
                  <div class="py-1 px-3 text-xs font-semibold">
                    React@gmail.com
                  </div>
                </td>
                <td class="px-4 py-2 text-xs font-semibold">576</td>
              </tr>
              <tr class="border-t border-blueGray-100">
                <td class="flex px-6 py-4 text-xs">
                  <div class="pl-4">
                    <p class="font-semibold">React</p>
                  </div>
                </td>
                <td class="px-4 py-2 text-xs">
                  <div class="py-1 px-3 text-xs font-semibold">
                    React@gmail.com
                  </div>
                </td>
                <td class="px-4 py-2 text-xs font-semibold">576</td>
              </tr>
              <tr class="border-t border-blueGray-100">
                <td class="flex px-6 py-4 text-xs">
                  <div class="pl-4">
                    <p class="font-semibold">React</p>
                  </div>
                </td>
                <td class="px-4 py-2 text-xs">
                  <div class="py-1 px-3 text-xs font-semibold">
                    React@gmail.com
                  </div>
                </td>
                <td class="px-4 py-2 text-xs font-semibold">576</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </dashboard>
</template>

<script>
import Dashboard from "../../components/Dashboard.vue";
export default {
  name: "Pengumuman",
  components: { Dashboard }
};
</script>
