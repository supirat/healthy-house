<script setup>
import FoodReceipt from "@/components/Food/FoodReceipt.vue";
import { ref } from "vue";
import { useRoute } from "vue-router";
const { params } = useRoute();

const category = params.category;
const menu = params.name;
const food = ref(null);

const loadFoodData = async () => {
  try {
    const module = await import(`@/data/food-receipt/${category}.js`);
    const menus = module.default;
    food.value = menus.find((v) => v?.name === menu);
    console.log(food.value);
  } catch (error) {
    console.error("Failed to load food data:", error);
  }
};

loadFoodData();
</script>

<template>
  <FoodReceipt :food="food"></FoodReceipt>
</template>
