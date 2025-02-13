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
          ตารางเล่นเวท 30 วัน สําหรับผู้หญิง หุ่นเฟิร์มทันปีใหม่!
        </h3>
        <p class="mt-4">
          ตารางนี้เน้น เวทเทรนนิ่งสลับระหว่าง Upper Body และ Lower Body
          โดยเพิ่มความแข็งแรงและกระชับสัดส่วน
          พร้อมรายละเอียดของจำนวนเซ็ตและเวลาพัก 💪🔥
        </p>
      </div>
      <div class="h-3/4 overflow-x-auto relative border border-gray-400">
        <table class="min-w-full w-full">
          <thead class="bg-gray-50 sticky top-0 z-10">
            <tr>
              <th
                class="px-4 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-400 whitespace-nowrap text-center"
              >
                Day
              </th>
              <th
                class="px-4 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-400 whitespace-nowrap text-center"
              >
                Workout Type
              </th>
              <th
                class="px-4 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-400 whitespace-nowrap text-center"
              >
                Exercise 1
              </th>
              <th
                class="px-4 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-400 whitespace-nowrap text-center"
              >
                Exercise 2
              </th>
              <th
                class="px-4 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-400 whitespace-nowrap text-center"
              >
                Exercise 3
              </th>
              <th
                class="px-4 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-400 whitespace-nowrap text-center"
              >
                Exercise 4
              </th>
              <th
                class="px-4 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-400 whitespace-nowrap text-center"
              >
                Reps per Set
              </th>
              <th
                class="px-4 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-400 whitespace-nowrap text-center"
              >
                Rest (วินาที)
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="day in data" :key="day.day">
              <td class="px-4 py-2 border border-gray-400 w-full">
                {{ day.day }}
              </td>
              <td class="px-4 py-2 border border-gray-400 w-full">
                {{ day.workoutType }}
              </td>
              <td class="px-4 py-2 border border-gray-400 w-full">
                {{ day.exercise1 }}
              </td>
              <td class="px-4 py-2 border border-gray-400 w-full">
                {{ day.exercise2 }}
              </td>
              <td class="px-4 py-2 border border-gray-400 w-full">
                {{ day.exercise3 }}
              </td>
              <td class="px-4 py-2 border border-gray-400 w-full">
                {{ day.exercise4 }}
              </td>
              <td class="px-4 py-2 border border-gray-400 w-full">
                {{ day.repsPerSet }}
              </td>
              <td class="px-4 py-2 border border-gray-400 w-full">
                {{ day.restSeconds }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
