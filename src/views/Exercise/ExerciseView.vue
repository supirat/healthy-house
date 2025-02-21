<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold mb-4">การเคลื่อนไหวร่างกาย</h2>
    <p class="mb-6">ข้อมูลเกี่ยวกับการออกกำลังกายและการเคลื่อนไหวร่างกาย</p>
    <div class="grid grid-cols-2 gap-4">
      <RouterLink
        v-for="(Exercise, index) in Exercises"
        :key="index"
        :to="Exercise.path"
        class="p-4 border rounded-lg shadow-md"
        :class="{ 'col-span-2': Exercise.colSpan === 2 }"
      >
        <h2 class="text-xl font-semibold">{{ Exercise.name }}</h2>
      </RouterLink>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Exercises: [
        {
          name: "ออกกําลังกาย 20 นาที ตามคลิปนี้แค่วันละครั้ง",
          path: "/Exercise/Workout",
        },
        {
          name: "ออกกําลังกาย 30 นาที แบบไม่กระโดด ไม่มีท่าสวอท",
          path: "/Exercise/30-Minute",
        },
        {
          name: "ออกกําลังลดหน้าท้องแบบยืน",
          path: "/Exercise/Standing",
        },
        {
          name: "ออกกําลังกายสําหรับผู้เริ่มต้นเพียง 15 นาที",
          path: "/Exercise/Beginner",
        },
        {
          name: "รวมคลิปออกกําลังกาย HIIT เบิร์นไขมัน",
          path: "/Exercise/HIIT",
        },
        {
          name: "ออกกําลังกาย 20 นาที เบิร์นได้ 300 Kcal",
          path: "/Exercise/20-Minute",
        },
        {
          name: "7 คลิกออกกําลังกาย 30 นาที ลดได้ทุกสัดส่วน",
          path: "/Exercise/WorkoutVideos",
        },
        {
          name: "ออกกําลังกาย 25 นาที หุ่นฟิต ไขมันลด แบบไม่ใช้อุปกรณ์",
          path: "/Exercise/25-Minute",
        },
        ]
    }
  }
}
</script>
