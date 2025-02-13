<script setup>
defineProps({
  data: Array,
});
</script>

<template>
  <div class="bg-white shadow-md rounded-lg p-6">
    <div class="flex flex-col justify-between h-[75vh]">
      <div class="h-1/4">
        <h3 class="text-xl font-semibold mb-4">
          ตารางสควอท 30 วัน ลดต้นขาและปั้นก้นเด้ง!
        </h3>
        <p class="mt-4">
          ลดต้นขาและปั้นก้น ให้คุณแล้ว ตารางนี้จะเพิ่มจำนวนครั้งของ Squats,
          Lunges, Glute Bridges และ Jump Squats อย่างค่อยเป็นค่อยไป
          พร้อมวันพักเพื่อให้กล้ามเนื้อฟื้นตัว 🍑🔥
        </p>
      </div>
      <div class="h-3/4 overflow-x-auto relative border border-gray-400">
        <table class="min-w-full border-collapse border border-gray-400">
          <thead class="bg-gray-50 sticky top-0 z-10">
            <tr>
              <th class="border border-gray-400">Day</th>
              <th class="border border-gray-400">Squats (ครั้ง)</th>
              <th class="border border-gray-400">Lunges (ครั้ง)</th>
              <th class="border border-gray-400">Glute Bridges (ครั้ง)</th>
              <th class="border border-gray-400">Jump Squats (ครั้ง)</th>
              <th class="border border-gray-400">Rest Day</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="day in data" :key="day.day">
              <td class="border border-gray-400">{{ day.day }}</td>
              <td class="border border-gray-400">{{ day.squats }}</td>
              <td class="border border-gray-400">{{ day.lunges }}</td>
              <td class="border border-gray-400">{{ day.gluteBridges }}</td>
              <td class="border border-gray-400">{{ day.jumpSquats }}</td>
              <td class="border border-gray-400">{{ day.restDay }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>
table,
th,
td {
  border: 1px solid #ccc;
}
</style>
