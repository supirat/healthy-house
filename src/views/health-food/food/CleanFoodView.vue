<script setup>
import { ref, onMounted } from 'vue';

const foods = ref([
  {
    name: "สลัดอกไก่ไข่ต้ม",
    image: new URL("@/assets/images/Food/อาหารคลีน/1. สลัดอกไก่ไข่ต้ม.png", import.meta.url).href,
  },
  {
    name: "ข้าวกล้องอกไก่ผัดพริกหวาน",
    image: new URL("@/assets/images/Food/อาหารคลีน/2. ข้าวกล้องอกไก่ผัดพริกหวาน.png", import.meta.url).href,
  },
  {
    name: "ปลาแซลมอนย่างกับผักนึ่ง",
    image: new URL("@/assets/images/Food/อาหารคลีน/3. ปลาแซลมอนย่างกับผักนึ่ง.png", import.meta.url).href,
  },
  {
    name: "ไข่ตุ๋นเต้าหู้",
    image: new URL("@/assets/images/Food/อาหารคลีน/4. ไข่ตุ๋นเต้าหู้.png", import.meta.url).href,
  },
  {
    name: "สุกี้น้ำอกไก่",
    image: new URL("@/assets/images/Food/อาหารคลีน/5. สุกี้น้ำอกไก่.png", import.meta.url).href,
  },
  {
    name: "ข้าวกล้องหน้าหมูย่างงา",
    image: new URL("@/assets/images/Food/อาหารคลีน/6. ข้าวกล้องหน้าหมูย่างงา.png", import.meta.url).href,
  },
  {
    name: "ต้มจืดเต้าหู้หมูสับ",
    image: new URL("@/assets/images/Food/อาหารคลีน/7. ต้มจืดเต้าหู้หมูสับ.png", import.meta.url).href,
  },
  {
    name: "ขนมปังโฮลวีตอะโวคาโดไข่ดาว",
    image: new URL("@/assets/images/Food/อาหารคลีน/8. ขนมปังโฮลวีตอะโวคาโดไข่ดาว.png", import.meta.url).href,
  },
  {
    name: "โยเกิร์ตกับผลไม้และธัญพืช",
    image: new URL("@/assets/images/Food/อาหารคลีน/9. โยเกิร์ตกับผลไม้และธัญพืช.png", import.meta.url).href,
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