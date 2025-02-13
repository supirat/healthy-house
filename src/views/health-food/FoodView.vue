<script setup>
import { RouterLink } from "vue-router";

import { getImageUrl } from "@/utils/image";

const cleanFoodImage = getImageUrl("@/assets/images/Food/อาหารคลีน.jpg");
const vegetarianFoodImage = getImageUrl("@/assets/images/Food/อาหารเจ.jpg");
const veganFoodImage = getImageUrl("@/assets/images/Food/อาหารมังสวิรัติ.jpg");
</script>
<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">อาหาร</h1>
    <p class="mb-6">รายละเอียดเกี่ยวกับอาหารเพื่อสุขภาพ</p>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <RouterLink
        to="food/clean-food"
        class="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
      >
        <img :src="cleanFoodImage" alt="อาหารคลีน" class="w-full h-48 object-cover mb-4" />
        <h2 class="text-xl font-semibold mb-2">อาหารคลีน</h2>
        <p>รายละเอียดเกี่ยวกับอาหารคลีน</p>
      </RouterLink>
      <RouterLink
        to="food/vegetarian-food"
        class="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
      >
        <img :src="vegetarianFoodImage" alt="อาหารเจ" class="w-full h-48 object-cover mb-4" />
        <h2 class="text-xl font-semibold mb-2">อาหารเจ</h2>
        <p>รายละเอียดเกี่ยวกับอาหารเจ</p>
      </RouterLink>
      <RouterLink
        to="food/vegan-food"
        class="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
      >
        <img :src="veganFoodImage" alt="อาหารมังสวิรัติ" class="w-full h-48 object-cover mb-4" />
        <h2 class="text-xl font-semibold mb-2">อาหารมังสวิรัติ</h2>
        <p>รายละเอียดเกี่ยวกับอาหารมังสวิรัติ</p>
      </RouterLink>
    </div>
  </div>
</template>
