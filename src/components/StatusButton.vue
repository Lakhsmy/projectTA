<template>
  <div class="w-full">
    <button
      v-if="status == 1"
      class="px-5 w-full py-1 text-sm font-bold text-green-900 bg-green-200 rounded-full d-flex focus:outline-none"
    >
      {{ getStatusString(status) }}
    </button>
    <button
      v-else-if="status == 2"
      class="px-5 py-1 text-sm font-bold text-gray-900 bg-yellow-300 rounded-full d-flex focus:outline-none"
    >
      {{ getStatusString(status) }}
    </button>
    <button
      v-else-if="status == 3"
      class="px-5 py-1 text-sm font-bold text-white bg-red-500 rounded-full d-flex focus:outline-none"
    >
      {{ getStatusString(status) }}
    </button>
  </div>
</template>
<script>
export default {
  props: {
    status: {
      type: Number
    }
  },
  methods: {
    getStatusString(status) {
      if (status == 1) {
        return "On Progress";
      } else if (status == 2) {
        return "Approved";
      } else if (status == 3) {
        return "Rejected";
      }
    }
  }
};
</script>
