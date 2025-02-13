<script setup>
import { getImageUrl } from "@/utils/image";
import { ref } from "vue";

const foods = ref([
  {
    name: "ข้าวกล้องผัดเต้าหู้และผักรวม",
    image: getImageUrl("@/assets/images/Food/อาหารมังสวิรัติ/1. ข้าวกล้องผัดเต้าหู้และผักรวม.png"),
    to: "vegan-food/ข้าวกล้องผัดเต้าหู้และผักรวม",
  },
  {
    name: "แกงเขียวหวานเห็ด",
    image: getImageUrl("@/assets/images/Food/อาหารมังสวิรัติ/2. แกงเขียวหวานเห็ด.png"),
    to: "vegan-food/แกงเขียวหวานเห็ด",
  },
  {
    name: "ลาบเห็ดมังสวิรัติ",
    image: getImageUrl("@/assets/images/Food/อาหารมังสวิรัติ/3. ลาบเห็ดมังสวิรัติ.png"),
    to: "vegan-food/ลาบเห็ดมังสวิรัติ",
  },
  {
    name: "ผัดไทยมังสวิรัติ",
    image: getImageUrl("@/assets/images/Food/อาหารมังสวิรัติ/4. ผัดไทยมังสวิรัติ.png"),
    to: "vegan-food/ผัดไทยมังสวิรัติ",
  },
  {
    name: "สปาเกตตีซอสมะเขือเทศกับเห็ด",
    image: getImageUrl("@/assets/images/Food/อาหารมังสวิรัติ/5. สปาเกตตีซอสมะเขือเทศกับเห็ด.png"),
    to: "vegan-food/สปาเกตตีซอสมะเขือเทศกับเห็ด",
  },
  {
    name: "น้ำพริกอ่องมังสวิรัติ",
    image: getImageUrl("@/assets/images/Food/อาหารมังสวิรัติ/6. น้ำพริกอ่องมังสวิรัติ.png"),
    to: "vegan-food/น้ำพริกอ่องมังสวิรัติ",
  },
  {
    name: "ฟักทองนึ่งงาดำ",
    image: getImageUrl("@/assets/images/Food/อาหารมังสวิรัติ/7. ฟักทองนึ่งงาดำ.png"),
    to: "vegan-food/ฟักทองนึ่งงาดำ",
  }
]);
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">อาหารมังสวิรัติ</h1>
    <p>รายละเอียดเกี่ยวกับอาหารมังสวิรัติ</p>
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
