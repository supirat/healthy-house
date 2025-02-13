<script setup>
import { getImageUrl } from "@/utils/image";
import { ref } from "vue";

const foods = ref([
  {
    name: "สลัดอกไก่ไข่ต้ม",
    image: getImageUrl("@/assets/images/Food/อาหารคลีน/1. สลัดอกไก่ไข่ต้ม.png"),
    to: "clean-food/สลัดอกไก่ไข่ต้ม",
  },
  {
    name: "ข้าวกล้องอกไก่ผัดพริกหวาน",
    image: getImageUrl(
      "@/assets/images/Food/อาหารคลีน/2. ข้าวกล้องอกไก่ผัดพริกหวาน.png"
    ),
    to: "clean-food/ข้าวกล้องอกไก่ผัดพริกหวาน",
  },
  {
    name: "ปลาแซลมอนย่างกับผักนึ่ง",
    image: getImageUrl(
      "@/assets/images/Food/อาหารคลีน/3. ปลาแซลมอนย่างกับผักนึ่ง.png"
    ),
    to: "clean-food/ปลาแซลมอนย่างกับผักนึ่ง",
  },
  {
    name: "ไข่ตุ๋นเต้าหู้",
    image: getImageUrl("@/assets/images/Food/อาหารคลีน/4. ไข่ตุ๋นเต้าหู้.png"),
    to: "clean-food/ไข่ตุ๋นเต้าหู้",
  },
  {
    name: "สุกี้น้ำอกไก่",
    image: getImageUrl("@/assets/images/Food/อาหารคลีน/5. สุกี้น้ำอกไก่.png"),
    to: "clean-food/สุกี้น้ำอกไก่",
  },
  {
    name: "ข้าวกล้องหน้าหมูย่างงา",
    image: getImageUrl(
      "@/assets/images/Food/อาหารคลีน/6. ข้าวกล้องหน้าหมูย่างงา.png"
    ),
    to: "clean-food/ข้าวกล้องหน้าหมูย่างงา",
  },
  {
    name: "ต้มจืดเต้าหู้หมูสับ",
    image: getImageUrl(
      "@/assets/images/Food/อาหารคลีน/7. ต้มจืดเต้าหู้หมูสับ.png"
    ),
    to: "clean-food/ต้มจืดเต้าหู้หมูสับ",
  },
  {
    name: "ขนมปังโฮลวีตอะโวคาโดไข่ดาว",
    image: getImageUrl(
      "@/assets/images/Food/อาหารคลีน/8. ขนมปังโฮลวีตอะโวคาโดไข่ดาว.png"
    ),
    to: "clean-food/ขนมปังโฮลวีตอะโวคาโดไข่ดาว",
  },
  {
    name: "โยเกิร์ตกับผลไม้และธัญพืช",
    image: getImageUrl(
      "@/assets/images/Food/อาหารคลีน/9. โยเกิร์ตกับผลไม้และธัญพืช.png"
    ),
    to: "clean-food/โยเกิร์ตกับผลไม้และธัญพืช",
  },
]);
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">อาหารคลีน</h1>
    <p>รายละเอียดเกี่ยวกับอาหารคลีน</p>
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
