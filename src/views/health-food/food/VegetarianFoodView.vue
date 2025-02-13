<script setup>
import { getImageUrl } from "@/utils/image";
import { ref } from "vue";

const foods = ref([
  {
    name: "เห็ดหยองเจ",
    image: getImageUrl("@/assets/images/Food/อาหารเจ/1. เห็ดหยองเจ.png"),
    to: "vegetarian-food/เห็ดหยองเจ",
  },
  {
    name: "ลาบวุ้นเส้นเห็ดสามสหาย",
    image: getImageUrl("@/assets/images/Food/อาหารเจ/2. ลาบวุ้นเส้นเห็ดสามสหาย.png"),
    to: "vegetarian-food/ลาบวุ้นเส้นเห็ดสามสหาย",
  },
  {
    name: "ผัดหมี่เจ",
    image: getImageUrl("@/assets/images/Food/อาหารเจ/3. ผัดหมี่เจ.png"),
    to: "vegetarian-food/ผัดหมี่เจ",
  },
  {
    name: "เห็ดนางฟ้าชุบแป้งทอดเจ",
    image: getImageUrl("@/assets/images/Food/อาหารเจ/4. เห็ดนางฟ้าชุบแป้งทอดเจ.png"),
    to: "vegetarian-food/เห็ดนางฟ้าชุบแป้งทอดเจ",
  },
  {
    name: "แกงจืดฟองเต้าหู้ดอกไม้จีนเจ",
    image: getImageUrl("@/assets/images/Food/อาหารเจ/5. แกงจืดฟองเต้าหู้ดอกไม้จีนเจ.png"),
    to: "vegetarian-food/แกงจืดฟองเต้าหู้ดอกไม้จีนเจ",
  },
  {
    name: "หมี่กรอบเจ",
    image: getImageUrl("@/assets/images/Food/อาหารเจ/6. หมี่กรอบเจ.png"),
    to: "vegetarian-food/หมี่กรอบเจ",
  },
]);
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">อาหารเจ</h1>
    <p>รายละเอียดเกี่ยวกับอาหารเจ</p>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        v-for="(food, index) in foods"
        :key="index"
        class="bg-white shadow-md rounded-lg overflow-hidden"
        @click="$router.push(food.to)"
      >
        <img :src="food.image" alt="food" class="w-full h-48 object-cover" />
        <div class="p-4">
          <h2 class="text-lg font-semibold">{{ food.name }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add any additional styling here */
</style>
