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
          ตารางสร้างซิกแพค 30 วัน ด้วยตัวเองง่าย ๆ
        </h3>
        <p class="mt-4">
          ตารางนี้รวมท่าหลัก ๆ เช่น Crunches, Leg Raises, Plank, Bicycle
          Crunches, Russian Twists, และ Mountain Climbers
          โดยเพิ่มจำนวนครั้งหรือระยะเวลาขึ้นทุกวันเพื่อความท้าทาย 💪🔥
        </p>
      </div>
      <div class="h-3/4 overflow-x-auto relative border border-gray-400">
        <table class="min-w-full">
          <thead class="bg-gray-50 sticky top-0 z-10">
            <tr>
              <th
                class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-400"
              >
                Day
              </th>
              <th
                class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-400"
              >
                Crunches (ครั้ง)
              </th>
              <th
                class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-400"
              >
                Leg Raises (ครั้ง)
              </th>
              <th
                class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-400"
              >
                Plank (วินาที)
              </th>
              <th
                class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-400"
              >
                Bicycle Crunches (ครั้ง)
              </th>
              <th
                class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-400"
              >
                Russian Twists (ครั้ง)
              </th>
              <th
                class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-400"
              >
                Mountain Climbers (ครั้ง)
              </th>
            </tr>
          </thead>
          <tbody class="bg-white">
            <tr
              v-for="day in data"
              :key="day.day"
              class="transition-all duration-100 hover:bg-gray-200"
            >
              <td
                class="px-4 py-2 whitespace-nowrap border border-gray-400"
              >
                {{ day.day }}
              </td>
              <td
                class="px-4 py-2 whitespace-nowrap border border-gray-400"
              >
                {{ day.crunches }}
              </td>
              <td
                class="px-4 py-2 whitespace-nowrap border border-gray-400"
              >
                {{ day.legRaises }}
              </td>
              <td
                class="px-4 py-2 whitespace-nowrap border border-gray-400"
              >
                {{ day.plank }}
              </td>
              <td
                class="px-4 py-2 whitespace-nowrap border border-gray-400"
              >
                {{ day.bicycleCrunches }}
              </td>
              <td
                class="px-4 py-2 whitespace-nowrap border border-gray-400"
              >
                {{ day.russianTwists }}
              </td>
              <td
                class="px-4 py-2 whitespace-nowrap border border-gray-400"
              >
                {{ day.mountainClimbers }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>