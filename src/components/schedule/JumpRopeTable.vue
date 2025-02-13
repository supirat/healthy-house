<script setup>
defineProps({
  data: Array,
});
</script>

<template>
  <div class="bg-white shadow-md rounded-lg p-6">
    <div class="flex flex-col justify-between h-[75vh]">
      <div class="h-1/4">
        <h3 class="text-xl font-semibold mt-4">
          ตารางกระโดดเชือก 30 วัน สําหรับมือใหม่อยากผอม!
        </h3>
        <p class="mt-4">
          ตารางกระโดดเชือก 30 วันสำหรับมือใหม่ ตารางนี้เริ่มต้นที่ 50 ครั้ง
          และเพิ่มขึ้นวันละ 10 ครั้ง
          พร้อมระยะเวลาการกระโดดที่เพิ่มขึ้นทุกวัน 💪🔥
        </p>
      </div>
      <div class="h-3/4 overflow-x-auto relative border border-gray-400">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50 sticky top-0 z-10 border border-gray-400">
            <tr>
              <th
                class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-400"
              >
                Day
              </th>
              <th
                class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-400"
              >
                Jump Rope (ครั้ง)
              </th>
              <th
                class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-400"
              >
                Duration (วินาที)
              </th>
              <th
                class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-400"
              >
                Rest (วินาที)
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="day in data" :key="day.day">
              <td
                class="px-4 py-2 whitespace-nowrap border border-gray-400"
              >
                {{ day.day }}
              </td>
              <td
                class="px-4 py-2 whitespace-nowrap border border-gray-400"
              >
                {{ day.jumpRope }}
              </td>
              <td
                class="px-4 py-2 whitespace-nowrap border border-gray-400"
              >
                {{ day.duration }}
              </td>
              <td
                class="px-4 py-2 whitespace-nowrap border border-gray-400"
              >
                {{ day.rest }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>