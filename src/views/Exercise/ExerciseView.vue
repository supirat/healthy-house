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
        <h2 class="text-xl font-semibold" v-for="n of Exercise.name">{{ n }}</h2>
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
          name: ["ออกกําลังกาย 20 นาที ตามคลิปนี้แค่วันละครั้ง","Workout for 20 Minutes Once a Day with This Video"],
          path: "/Exercise/Workout",
        },
        {
          name: ["ออกกําลังกาย 30 นาที แบบไม่กระโดด ไม่มีท่าสวอท","30-Minute Low-Impact Workout (No Jumping, No Squats)"],
          path: "/Exercise/30-Minute",
        },
        {
          name: ["ออกกําลังลดหน้าท้องแบบยืน","Standing Abs Workout for a Flat Stomach"],
          path: "/Exercise/Standing",
        },
        {
          name: ["ออกกําลังกายสําหรับผู้เริ่มต้นเพียง 15 นาที","Beginner-Friendly 15-Minute Workout"],
          path: "/Exercise/Beginner",
        },
        {
          name: ["รวมคลิปออกกําลังกาย HIIT เบิร์นไขมัน","HIIT Workout Compilation for Fat Burning"],
          path: "/Exercise/HIIT",
        },
        {
          name: ["ออกกําลังกาย 20 นาที เบิร์นได้ 300 Kcal","20-Minute Workout to Burn 300 Calories"],
          path: "/Exercise/20-Minute",
        },
        {
          name: ["7 คลิกออกกําลังกาย 30 นาที ลดได้ทุกสัดส่วน","Workout Videos – 30 Minutes to Tone Your Entire Body"],
          path: "/Exercise/WorkoutVideos",
        },
        {
          name: ["ออกกําลังกาย 25 นาที หุ่นฟิต ไขมันลด แบบไม่ใช้อุปกรณ์","25-Minute Full-Body Workout – Get Fit & Burn Fat (No Equipment)"],
          path: "/Exercise/25-Minute",
        },
        ]
    }
  }
}
</script>
