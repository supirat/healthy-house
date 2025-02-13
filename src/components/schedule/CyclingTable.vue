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
          ตารางปั่นจักรยานเพื่อหุ่นสวยสําหรับมือใหม่ ภายใน 30 วัน
        </h3>
        <p class="mt-4">
          ให้คุณแล้ว ตารางนี้จะช่วยให้คุณค่อย ๆ ปรับตัว
          เพิ่มระยะทางและระยะเวลาปั่นจักรยานอย่างเป็นระบบ
          พร้อมวันพักเพื่อให้ร่างกายฟื้นตัว 🚴‍♀️🔥
        </p>
      </div>
      <div class="h-3/4 overflow-x-auto relative border border-gray-400">
        <table class="min-w-full border-collapse border border-gray-400">
          <thead class="bg-gray-50 sticky top-0 z-10">
            <tr>
              <th class="border border-gray-400">Day</th>
              <th class="border border-gray-400">Distance (กม.)</th>
              <th class="border border-gray-400">Duration (นาที)</th>
              <th class="border border-gray-400">Speed (กม./ชม.)</th>
              <th class="border border-gray-400">Rest Day</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="day in data" :key="day.day">
              <td class="border border-gray-400">{{ day.day }}</td>
              <td class="border border-gray-400">{{ day.distance }}</td>
              <td class="border border-gray-400">{{ day.duration }}</td>
              <td class="border border-gray-400">{{ day.speed }}</td>
              <td class="border border-gray-400">{{ day.restDay }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
